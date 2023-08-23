import React from "react";
import { useState } from "react";

const Collapse = (props) => {
  const [isActive, setIsActive] = useState(true);

  function showContent() {
    setIsActive((prevState) => {
      return !prevState;
    });
  }

  return (
    <div className="test">
      <div className="accordion">
        <div className="accordion__title" onClick={showContent}>
          <h4>{props.title}</h4>
          <div>V</div>
        </div>
        <div
          className={
            isActive ? "accordion__content" : "accordion__content_hide"
          }
        >
          {isActive && <p>{props.content}</p>}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
