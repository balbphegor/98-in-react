import React from "react";

const Icon = ({ title }) => {
  return (
    <div className="icon">
      <a className="icon-anchor" href="/#">
        <img className="icon-img" src={require("./image.png")} alt="123" />
        <span className="icon-name">{title}</span>
      </a>
    </div>
  );
};

export default Icon;
