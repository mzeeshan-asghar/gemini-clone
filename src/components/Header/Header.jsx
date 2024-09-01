import { useState } from "react";
import "./Header.css";
import IconBlue from "../../assets/svgs/IconBlue";
import IconPink from "../../assets/svgs/IconPink";

function Header() {
  let [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="primaryHeader">
      <div className="dropDownContainer">
        <button onClick={handleDropdown} className="dropDownBtn">
          <span className="siteTitle"> Gemini </span>
          <span className="material-symbols-outlined">arrow_drop_down</span>
        </button>
        <div className={`dropDownList ${showDropdown ? "showDropdown" : ""}`}>
          <div className="option option1">
            <IconBlue />
            <span>Gemini</span>
            <span className="material-symbols-outlined">check_circle</span>
          </div>
          <div className="option option2">
            <IconPink />
            <span>Gemini Advanced</span>
            <button className="upgradeBtn">Upgrade</button>
          </div>
        </div>
      </div>
      <div className="headerOptions">
        <button className="upgradeBtn">
          <IconPink />
          <span> Try Gemini Advanced </span>
        </button>
        <div className="googleApps">
          <span className="material-symbols-outlined">apps</span>
        </div>
        <div className="myAccount">
          <button>M</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
