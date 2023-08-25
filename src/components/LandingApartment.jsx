import React from "react";
import Card from "./Card";
import dataApartments from "../assets/annonces.json";

const LandingApartment = () => {
  const apartementElements = dataApartments.map((apart) => {
    return (
      <Card
        cover={apart.cover}
        title={apart.title}
        key={apart.id}
        id={apart.id}
      />
    );
  });

  return <div className="apartments">{apartementElements}</div>;
};

export default LandingApartment;
