import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to="/apartment" state={props.id} className="apartments__card">
      <img src={props.cover} alt="Couverture représentant un appartement" />
      <p className="apartments__card__title">{props.title}</p>
    </Link>
  );
};

export default Card;

/*<Link to={`/apartment/${props.id}`} className="apartments__card">
<img src={props.cover} alt="Couverture représentant un appartement" />
<p className="apartments__card__title">{props.title}</p>
</Link>*/
