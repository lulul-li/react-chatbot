import React from "react";

import "./FrequencyOptions.css";

const YesNoOptions = (props) => {
  const options = [

    { text: "Yes, I am ready!", handler: props.actionProvider.recentlyFeeling, id:1 },
    { text: "No, not now.", handler: () => {}, id: 2 },
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

export default YesNoOptions;
