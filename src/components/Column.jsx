import React from "react";

const Column = ({ title, children }) => {
  return (
    <div className="column-wrapper">
      <div className="column-title">{title}</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Column;
