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
        <p>{props.name}</p>
        {/* <img src={props.picture} /> */}

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
