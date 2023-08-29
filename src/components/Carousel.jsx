import React from "react";
import leftArrow from "../images/left-arrow.png";
import rightArrow from "../images/right-arrow.png";
import { useState } from "react";

const Carousel = (props) => {
  const [actualSlide, setActualSlide] = useState(0);

  const nextSlide = () => {
    setActualSlide((prevPic) => prevPic + 1);
  };

  const prevSlide = () => {
    setActualSlide((prevPic) => prevPic - 1);
  };

  return (
    <div className="caroussel">
      <img
        className="caroussel__slider"
        src={props.pictures[actualSlide]}
        alt={props.title}
      />
      <img
        className="caroussel__left"
        src={leftArrow}
        onClick={prevSlide}
        alt="button left arrow"
      />
      <img
        className="caroussel__right"
        src={rightArrow}
        onClick={nextSlide}
        alt="button right arrow"
      />
    </div>
  );
};

export default Carousel;
