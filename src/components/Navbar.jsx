import React from "react";
import { NavLink } from "react-router-dom";
import LogoKasa from "../images/kasa-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img
          src={LogoKasa}
          alt="Logo représentant l'application web de location immobilière Kasa"
        />
      </div>
      <div className="navbar__links">
        <NavLink
          to="/"
          className={`navbar__links__accueil ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          Accueil
        </NavLink>
        <NavLink to="/about" className="navbar__links__apropos">
          A propos
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
