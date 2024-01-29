import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify-icon/react";
import MetaMaskOnboarding from "@metamask/onboarding";

const Popup = ({ onClose }) => {
  const onboarding = useRef();

  React.useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  const handleInstallButtonClick = () => {
    if (onboarding.current) {
      onboarding.current.startOnboarding();
    }
  };

  return (
    <div className="popup" id="metamask-popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>
          Metamask extension is not installed! <br />
          Please install it first.
        </h2>
        <button
          id="installMetamaskBtn"
          type="button"
          className="btn btn-outline-dark btn-lg"
          onClick={handleInstallButtonClick}
        >
          Install &nbsp;
          <Icon icon="logos:metamask-icon" />
        </button>
      </div>
    </div>
  );
};


const Login = ({ onGoBackBtnClick, setLoggedIn }) => {
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [_account, setAccounts] = useState([]);
  const onboarding = useRef();

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  function handleNewAccounts(newAccounts) {
    setAccounts(newAccounts);
    if (newAccounts.length == 0) {
      setLoggedIn(false);
      handleLocalStorage("");
    } else {
      handleLocalStorage(newAccounts[0].toString());
    }
  }

  const handleLocalStorage = (newAccount) => {
    window.sessionStorage.setItem("accounts", newAccount);
    window.dispatchEvent(new Event("storage"));
  };

  const handleLoginButtonClick = async () => {
    try {
      if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
        setPopupVisibility(true);
      } else {
        const newAccounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (newAccounts.length > 0) {
          setAccounts(newAccounts);
          setLoggedIn(true);
          handleLocalStorage(newAccounts[0].toString());
          if (window.ethereum) {
            window.ethereum.on("accountsChanged", handleNewAccounts);
          }
        }
      }
    } catch (error) {
      console.error("Error in handleLoginButtonClick:", error);
    }
  };

  window.addEventListener("beforeunload", () => {
    if (window.ethereum) {
      window.ethereum.removeListener("accountsChanged", handleNewAccounts);
    }
  });

  const handleClosePopup = () => {
    setPopupVisibility(false);
  };

  return (
    <div className="text-center">
      <img
        id="logo"
        className="pt-5 pb-md-5 logo-center"
        src="src/assets/imgs/logo3.png"
        alt="logo"
      ></img>

      <div id="buttons-container">
        <div
          id="buttons"
          className="d-grid gap-2 flex-column justify-content-md-end pt-5"
        >
          <button
            id="loginButton"
            type="button"
            className="btn btn-outline-light btn-lg"
            onClick={handleLoginButtonClick}
          >
            Login with <Icon icon="logos:metamask-icon" />
          </button>
          <button
            id="goBackButton"
            type="button"
            onClick={onGoBackBtnClick}
            className="btn btn-outline-light btn-sm"
          >
            Go Back
          </button>
        </div>
      </div>

      {isPopupVisible && <Popup onClose={handleClosePopup} />}
    </div>
  );
};

export default Login;
