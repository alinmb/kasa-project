import React from "react";
import LogoKasaFooter from "../images/kasa-logo-footer.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img
        className="footer__img"
        src={LogoKasaFooter}
        alt="Logo représentant l'application web de location immobilière Kasa"
      />
      <p className="footer__desc">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
