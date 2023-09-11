import React from "react";
import { useParams, Navigate } from "react-router-dom";
import dataLogements from "../assets/data.json";

import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Annonces from "../components/Annonces";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

const Logement = () => {
  const { id } = useParams();
  const annonce = dataLogements.find((ann) => ann.id === id);

  if (annonce === undefined) {
    return <Navigate replace to="/error" />;
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
          title="Description"
          content={annonce.description}
          customClass="custom-collapse-1"
        />
        <Collapse
          title="Équipements"
          content={annonce.equipments.map((equip, index) => {
            return (
              <li style={{ listStyle: "none" }} key={index}>
                {equip}
              </li>
            );
          })}
          customClass="custom-collapse-2"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Logement;
