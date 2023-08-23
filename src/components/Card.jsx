import React from "react";

const Card = (props) => {
  return (
    <div className="apartments__card">
      <img src={props.cover} alt="Couverture représentant un appartement" />
      <p className="apartments__card__title">{props.title}</p>
    </div>
  );
};

export default Card;
