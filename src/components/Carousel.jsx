import { React, useState } from "react";
import leftArrow from "../images/left-arrow.png";
import rightArrow from "../images/right-arrow.png";

const Carousel = (props) => {
  // Afin de pouvoir manipuler l'index de la source de l'image, j'initialise mon state à 0.

  const [actualSlide, setActualSlide] = useState(0);

  //  Cette fonction permet de voir l'image suivante.
  //  Ma condition vérifie l'index (actualSlide), si ce dernier est égal au tableau d'image -1 du fichier JSON, l'index repasse à 0.
  //  Sinon l'index augmente de 1.
  const nextSlide = () => {
    if (actualSlide === props.pictures.length - 1) {
      setActualSlide(0);
    } else {
      setActualSlide((prevPic) => prevPic + 1);
    }
  };

  // Cette fonction permet de voir l'image précédente.
  // Ma condition vérifie l'index (actualSlide), si ce dernier est égal à 0, l'index repasse à la fin du tableau.
  // Sinon l'index descend de 1.
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
          alt="Bouton représentant une flèche gauche qui permet de voir la slide précedente"
        />
      )}
      {props.pictures.length > 1 && (
        <img
          className="caroussel__right"
          src={rightArrow}
          onClick={nextSlide}
          alt="Bouton représentant une flèche droite qui permet de voir la slide suivante"
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
