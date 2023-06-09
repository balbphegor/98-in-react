import React from "react";
import { lookup } from "./constants.js";
const Icon = ({ title, createPanel, icon }) => {
  const source = lookup[title]["src"];
  return (
    <div
      onClick={(event) =>
        lookup[title]["ispanel"]
          ? createPanel(title, source)
          : window.open(source, "_blank")
      }
      className="icon"
    >
      <a className="icon-anchor" href="/#">
        <img
          className="icon-img"
          src={require(`./assets/icon/${icon}`)}
          alt={title}
        />
        <span className="icon-name">{title}</span>
      </a>
    </div>
  );
};

export default Icon;
