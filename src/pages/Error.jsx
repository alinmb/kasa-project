import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <div className="error">
      <Navbar />
      <div className="error__bloc">
        <h1 className="error__title">404</h1>
        <h3 className="error__desc">
          Oups! La page que vous demandez n'existe pas.
        </h3>
        <Link to="/" className="error__return">
          Retourner sur la page d’accueil
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
