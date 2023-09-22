import React from "react";

export const ImageCard = (props) => {
  return (
    <div className="First-row">
      <div className="images">
        <img loading="lazy" src={props.url} alt={props.title} />
        <p className="text-center fw-bold firstP">{props.title}</p>
      </div>
    </div>
  );
};
