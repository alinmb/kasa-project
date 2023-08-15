import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__bloc">
        <img
          className="header__img"
          src="./images/kasa-banner.png"
          alt="Bannière de l'application web de location immobilière Kasa"
        />
        <h1 className="header__title">Chez vous, partout et ailleurs</h1>
      </div>
    </header>
  );
};

export default Header;
