import React, { useState } from "react";
import "./style.css";
import logo from "../../assets/logo/Screenshot_2024-12-06_161718-removebg-preview.png";
import Eng from "../../assets/flags/Eng";
import Uzb from "../../assets/flags/Uzb";

const Navbar = () => {
  const [changelang, setChangelang] = useState("Eng");
  const [theme, setTheme] = useState(false);
  const [langmenuopener, setLangMenuOpener] = useState(false);

  const langswitcher = (value) => {
    setChangelang(value);
    setLangMenuOpener(false); // Close the menu after selection
  };

  return (
    <div className={`navbar ${theme ? "dark" : "light"}`}>
      <div className="container">
        <div className="main-navbar">
          <img src={logo} alt="Logo" />
          <ul>
            <li>Teachers</li>
            <li>Courses</li>
            <li>Branches</li>
            <li>Achievements</li>
          </ul>
          <div className="multilang-btn">
            <button
              className={`multilang-button ${langmenuopener ? "active" : ""}`}
              onClick={() => setLangMenuOpener(!langmenuopener)}
            >
              <Eng />
              {changelang}
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div className={`multilang-btn-menu ${langmenuopener ? "active" : ""}`}>
              <button onClick={() => langswitcher("Eng")}>Eng</button>
              <button onClick={() => langswitcher("Rus")}>Rus</button>
              <button onClick={() => langswitcher("Uzb")}>Uzb</button>
            </div>
          </div>
          <button onClick={() => setTheme(!theme)} className="theme-switcher-btn">
            <i className={theme ? "fa-solid fa-moon" : "fa-regular fa-sun-bright"}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
