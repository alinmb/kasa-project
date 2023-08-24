import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import data from "../assets/annonces.json";
import Collapse from "../components/Collapse";

const Apartment = () => {
  return (
    <div className="annonce">
      <Navbar />
      <div className="annonce__img">
        <img
          src="https://www.orangevelodrome.com/wp-content/uploads/2020/08/Conformation-images-ov-2-1920x1080-1.jpg"
          alt="xx"
        />
      </div>
      <div className="annonce__split">
        <div className="annonce__title">
          <h1>Cozy loft on the Canal Saint-Martin</h1>
          <h2>Paris, Île-de-France</h2>
          <div className="annonce__tags">
            <p>Cozy</p>
            <p>Canal</p>
            <p>Paris 10</p>
          </div>
        </div>
        <div className="annonce__owner">
          <p>
            Alexandre
            <br />
            Dumas
          </p>
          <div className="annonce__owner__rating">
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
            <span>X</span>
          </div>
        </div>
      </div>

      <div className="annonce__accordion">
        <Collapse
          title="Description"
          content="Test"
          customClass="custom-collapse-1"
        />
        <Collapse
          title="Equipements"
          content="Test"
          customClass="custom-collapse-2"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Apartment;
