import React from "react";

const Annonces = (props) => {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="annonce__split">
      {/* Ce bloc comprend le titre du logement, sa localisation & ses tags. */}
      <div className="annonce__title">
        <h1>{props.title}</h1>
        <h2>{props.location}</h2>
        <div className="annonce__tags">
          {/* Je map dans les tags pour récupérer les éléments un par un. */}
          {props.tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
      </div>
      {/* Ce bloc comprend le nom de l'annonceur ainsi que sa photo. */}
      <div className="annonce__owner">
        <div className="annonce__owner__p1">
          <p>{props.name}</p>
          <img
            src={props.picture}
            className="annonce__owner__pic"
            alt={`Représentation de ${props.name} qui possède le bien.`}
          />
        </div>
        {/* Ce bloc display la note du logement. */}
        <div className="annonce__owner__rating">
          {/* Je map dans mon tableau, efin de créer 5 étoiles. 
          Pour chaque étoile la condition détermine si l'étoile sera solid ou regular en fonction de la note récupéré dans le fichier JSON. */}
          {range.map((rangeElem, index) => (
            <span key={index}>
              <i
                className={
                  parseInt(props.rating) >= rangeElem
                    ? "fa-solid fa-star"
                    : "fa-regular fa-star"
                }
              ></i>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Annonces;
