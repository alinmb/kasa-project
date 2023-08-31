import { React, useState } from "react";
import arrowUp from "../images/up.png";

const Collapse = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  // Cette fonction permet de faire passer un élément d'un état à un autre (false - true / true - false)
  function showContent() {
    setIsVisible((prevState) => {
      return !prevState;
    });
  }

  const mountedStyle = { animation: "inAnimation 0.5s ease-in-out" };
  const unmountedStyle = {
    animation: "outAnimation 0.5s ease-in-out",
  };

  const rotateOpen = {
    transform: isVisible ? "rotate(-180deg)" : "",
    transition: "transform 0.5s ease-in-out",
  };

  return (
    <div className={`accordion ${props.customClass}`}>
      <div className="accordion__title" onClick={showContent}>
        <h4>{props.title}</h4>
        <img src={arrowUp} alt="Flèche" style={rotateOpen} />
      </div>
      <div
        className="accordion__content"
        style={isVisible ? mountedStyle : unmountedStyle}
      >
        {isVisible && <p>{props.content}</p>}
      </div>
    </div>
  );
};

export default Collapse;
