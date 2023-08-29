import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from "../assets/annonces.json";
import Collapse from "../components/Collapse";
import Error from "./Error";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import Annonces from "../components/Annonces";
import Carousel from "../components/Carousel";

import { useParams } from "react-router-dom";

const Apartment = () => {
  const { id } = useParams();

  const annonce = data.find((da) => da.id === id);

  if (annonce === undefined) {
    return <Error />;
  }

  return (
    <div className="annonce">
      <Navbar />
      <Carousel pictures={annonce.pictures} />
      <Annonces
        title={annonce.title}
        location={annonce.location}
        tags={annonce.tags}
        name={annonce.host.name}
        picture={annonce.host.picture}
        rating={annonce.rating}
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
