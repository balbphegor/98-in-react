import React from "react";
import { lookup } from "./constants.js";
function TaskbarTab({ title, id, updateIndex, showPanel }) {
  const isrc_name = lookup[title]["irsc"];
  return (
    <button
      onClick={(event) => {
        updateIndex(id);
        showPanel(id);
      }}
      className="taskbar-element"
    >
      <img
        className="start-icon"
        src={require(`./assets/tray1.png`)}
        alt="alt"
      ></img>
      <span className="element-text">{title}</span>
    </button>
  );
}

export default TaskbarTab;
