import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="flower" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <span>{props.meaning}</span>
    </div>
  );
}

export default Entry;
