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
  const annonces = dataLogements.find((annonce) => annonce.id === id);

  if (annonces === undefined) {
    return <Navigate replace to="/error" />;
  }

  return (
    <div className="annonce">
      <Navbar />
      <Carousel pictures={annonces.pictures} />
      <Annonces
        title={annonces.title}
        location={annonces.location}
        tags={annonces.tags}
        name={annonces.host.name}
        picture={annonces.host.picture}
        rating={annonces.rating}
      />

      <div className="annonce__accordion">
        <Collapse
          title="Description"
          content={annonces.description}
          customClass="custom-collapse-1"
        />
        <Collapse
          title="Équipements"
          content={annonces.equipments.map((equip, index) => {
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
