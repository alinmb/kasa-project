import React from "react";
import leftArrow from "../images/left-arrow.png";
import rightArrow from "../images/right-arrow.png";
import { useState } from "react";

const Carousel = (props) => {
  const [actualSlide, setActualSlide] = useState(0);

  const nextSlide = () => {
    if (actualSlide === props.pictures.length - 1) {
      setActualSlide(0);
    } else {
      setActualSlide((prevPic) => prevPic + 1);
    }
  };

  const prevSlide = () => {
    if (actualSlide === 0) {
      setActualSlide(props.pictures.length - 1);
    } else {
      setActualSlide((prevPic) => prevPic - 1);
    }
  };

  return (
    <div className="caroussel">
      <img
        className="caroussel__slider"
        src={props.pictures[actualSlide]}
        alt={props.title}
      />
      {props.pictures.length > 1 && (
        <img
          className="caroussel__left"
          src={leftArrow}
          onClick={prevSlide}
          alt="button left arrow"
        />
      )}
      {props.pictures.length > 1 && (
        <img
          className="caroussel__right"
          src={rightArrow}
          onClick={nextSlide}
          alt="button right arrow"
        />
      )}
      {props.pictures.length > 1 && (
        <p className="caroussel__actualSlide">
          {actualSlide + 1}/{props.pictures.length}
        </p>
      )}
    </div>
  );
};

export default Carousel;
