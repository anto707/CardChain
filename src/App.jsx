import { useState, useEffect } from "react";
import GameSect from "./components/GameSect";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import Footer from "./components/Footer";
import Login from "./components/Login";
import LoggedInComponent from "./components/LoggedInComponent";

const App = () => {
  const initialShowLogin = sessionStorage.getItem("showLogin") === "true";
  const initialLoggedIn = sessionStorage.getItem("loggedIn") === "true";

  const [showLogin, setShowLogin] = useState(initialShowLogin);
  const [loggedIn, setLoggedIn] = useState(initialLoggedIn);
  const [key, setKey] = useState(0);
  const [selectedSection, setSelectedSection] = useState("section1");

  const handleSelectSection = (section) => {
    setSelectedSection(section);
  };

  const btnClick = () => {
    setShowLogin(!showLogin);
  };

  const setLogged = (value) => {
    setLoggedIn(value);
  };

  useEffect(() => {
    sessionStorage.setItem("showLogin", showLogin.toString());
  }, [showLogin]);

  useEffect(() => {
    sessionStorage.setItem("loggedIn", loggedIn.toString());
  }, [loggedIn]);

  useEffect(() => {
    const checkConnectedAccounts = async () => {
      try {
        if (window.ethereum) {
          const ethereumAccounts = await window.ethereum.request({
            method: "eth_accounts",
          });

          const areAccountsConnected =
            ethereumAccounts && ethereumAccounts.length > 0;

          setLoggedIn(areAccountsConnected);
          setKey((prevKey) => prevKey + 1);
        } else {
          console.error("Ethereum provider not detected.");
        }
      } catch (error) {
        console.error("Error checking connected accounts:", error);
      }
    };

    checkConnectedAccounts();
  }, [key]);

  return (
    <div id="App">
      {loggedIn ? (
        <>
          <Header variation={loggedIn} onSelectSection={handleSelectSection} />
          <LoggedInComponent selectedSection={selectedSection} />
        </>
      ) : showLogin ? (
        <Login onGoBackBtnClick={btnClick} setLoggedIn={setLogged} />
      ) : (
        <>
          <Header variation={loggedIn} />
          <IntroSection onStartBtnClick={btnClick} />
          <GameSect />
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
