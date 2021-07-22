import React from "react";
import moonLight from "../assests/icons/moonLight.svg";
import moonDark from "../assests/icons/moonDark.svg";
import { useCountry } from "../Contexts/CountryContext";

import "../Css/Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useCountry();
  return (
    <nav className="nav">
      <p>Where in the World?</p>
      <div className="nav-right" onClick={toggleTheme}>
        <img src={`${theme === "light" ? moonLight : moonDark}`} alt="moon" />
        <span>Dark Mode</span>
      </div>
    </nav>
  );
};

export default Navbar;
