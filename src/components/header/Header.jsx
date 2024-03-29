import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "fontawesome.macro";

import "./Header.css";
import logo2 from "../../Images/logo2.png";
import { Link } from "react-router-dom";

const Header = () => {
  function handleLogout() {
    localStorage.removeItem("userToken");
  }

  return (
    <div className="navbar">
      <div className="firstName">
        <FontAwesomeIcon icon={fas("arrow-right-from-bracket")} />
        <Link to="/logout">
          <button className="btn" onClick={() => handleLogout()}>
            Logout
          </button>
        </Link>
      </div>
      <a href="/" className="logo2">
        <img src={logo2} alt="logo" />
      </a>
    </div>
  );
};

export default Header;
