import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header
      className={location.pathname === "/about" ? "about__img" : "header"}
    >
      {location.pathname === "/" && (
        <h1 className="header__title">Chez vous, partout et ailleurs</h1>
      )}
      {location.pathname === "/" && (
        <h1 className="header__title2">
          Chez vous,
          <br /> partout et ailleurs
        </h1>
      )}
    </header>
  );
};

export default Header;
