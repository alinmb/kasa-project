import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/" className="navbar__links__accueil">
          Accueil
        </Link>
        <Link to="/about" className="navbar__links__apropos">
          A propos
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
