import React from "react";

const Icon = ({ title, createPanel }) => {
  return (
    <div onClick={(event) => createPanel(title)} className="icon">
      <a className="icon-anchor" href="/#">
        <img className="icon-img" src={require("./image.png")} alt="123" />
        <span className="icon-name">{title}</span>
      </a>
    </div>
  );
};

export default Icon;
