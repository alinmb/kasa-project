import React from "react";

const Accordion = (props) => {
  return (
    <div className="accordion">
      <div className="accordion__header">
        <div className="accordion__container">
          <p>{props.title}</p>
          <span>V</span>
        </div>
      </div>

      <div className="accordion__content">
        <div className="accordion__container">
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
