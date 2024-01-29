import { useState } from "react";
import MarketPlace from "./logged/MarketPlace";
import { Icon } from "@iconify-icon/react";

const LoggedInComponent = ({ selectedSection }) => {
  const [account, setAccount] = useState(
    sessionStorage.getItem("accounts")
  );

  window.addEventListener("storage", () => {
    setAccount(sessionStorage.getItem("accounts"));
  });

  return (
    <div>
      <div id="userBar" className="pt-3 d-flex">
        <p className="truncated-text px-2 mt-3">
          Logged in with account:{" "}
          <span className="accountId-text">{account}</span>
        </p>
        <div id="tokenContainer" className="d-flex align-items-center">
          <img
            src="src/assets/imgs/gametoken.png"
            width="10%"
            className="token-logo"
          />
          <div className="bg-white rounded">
            <p className="mb-0 px-1 gem-counter text-black">
              {"tokenCount"} Tokens
            </p>
          </div>
          <Icon className="plus-btn px-1" icon="ic:round-plus" />
        </div>
      </div>
      {selectedSection === "sectionMarket" ? <MarketPlace /> : <p> Deck </p>}
    </div>
  );
}

export default LoggedInComponent;
