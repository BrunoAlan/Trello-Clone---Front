import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <h4 className="card-description">{description}</h4>
    </div>
  );
};

export default Card;
