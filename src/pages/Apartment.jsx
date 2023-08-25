import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from "../assets/annonces.json";
import Collapse from "../components/Collapse";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import ApartmentPage from "../components/ApartmentPage";
import { useLocation } from "react-router-dom";

const Apartment = () => {
  const loc = useLocation();
  // console.log(loc);

  const annonce = data.find((da) => da.id === loc.state);
  // console.log(annonce);

  return (
    <div className="annonce">
      <Navbar />
      <div className="annonce__img">
        <img src={annonce.pictures[0]} alt={annonce.title} />
      </div>
      <ApartmentPage
        title={annonce.title}
        location={annonce.location}
        tags={annonce.tags}
        name={annonce.host.name}
        picture={annonce.host.picture}
      />
      <div className="annonce__accordion">
        <Collapse
          title="Déscription"
          content={annonce.description}
          customClass="custom-collapse-1"
        />
        <Collapse
          title="Equipements"
          content={annonce.equipments.map((equip, index) => {
            return <li key={index}>{equip}</li>;
          })}
          customClass="custom-collapse-2"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Apartment;
