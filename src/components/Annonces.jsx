import React from "react";

const ApartmentPage = (props) => {
  return (
    <div className="annonce__split">
      <div className="annonce__title">
        <h1>{props.title}</h1>
        <h2>{props.location}</h2>
        <div className="annonce__tags">
          {props.tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
      </div>

      <div className="annonce__owner">
        <div className="annonce__owner__p1">
          <p>{props.name}</p>
          <img
            src={props.picture}
            className="annonce__owner__pic"
            alt={`Représentation de ${props.name} qui possède le bien.`}
          />
        </div>

        <div className="annonce__owner__rating">
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <span>
            <i className="fa-regular fa-star"></i>
          </span>
          <span>
            <i className="fa-regular fa-star"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ApartmentPage;
