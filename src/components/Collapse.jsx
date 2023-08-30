import { React, useState } from "react";
import arrowDown from "../images/down.png";
import arrowUp from "../images/up.png";

const Collapse = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  // Cette fonction permet de faire passer un élément d'un état à un autre (false - true / true - false)
  function showContent() {
    setIsVisible((prevState) => {
      return !prevState;
    });
  }

  return (
    <div className={`accordion ${props.customClass}`}>
      <div className="accordion__title" onClick={showContent}>
        <h4>{props.title}</h4>
        <img src={isVisible ? arrowDown : arrowUp} alt="Flèche" />
      </div>
      <div
        className={isVisible ? "accordion__content" : "accordion__content_hide"}
      >
        {isVisible && <p>{props.content}</p>}
      </div>
    </div>
  );
};

export default Collapse;
