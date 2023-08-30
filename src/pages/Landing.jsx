import React from "react";
import Card from "../components/Card";
import dataLogements from "../assets/data.json";

const Landing = () => {
  const logements = dataLogements.map((log) => {
    return (
      <Card cover={log.cover} title={log.title} key={log.id} id={log.id} />
    );
  });

  return <div className="apartments">{logements}</div>;
};

export default Landing;
