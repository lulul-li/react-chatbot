import React from "react";

import "./FrequencyOptions.css";

const FrequencyOptions = (props) => {
  const options = [

    { text: "Often", handler: () => {}, id:1 },
    { text: "Occasionally", handler: () => {}, id: 2 },
    { text: "Rarely", handler: () => {}, id: 3 },
    { text: "Never", handler: () => {}, id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};

export default FrequencyOptions;
