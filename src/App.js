import React, { useState } from "react";
import "./App.css";
import Panel from "./Panel";
import Taskbar from "./Taskbar";
import TaskbarTab from "./TaskbarTab";
import Icon from "./Icon";
function App() {
  const [foremostIndex, setForemostIndex] = useState(1);
  const updateIndex = (id) => {
    setForemostIndex(foremostIndex + 1);
    document.getElementById(`panel-${id}`).style.zIndex = foremostIndex;
  };
  const [contentArray, setContentArray] = useState([
    [0, "About me!"],
    [2, "Home stretch"],
  ]);
  const closePanel = (id) => {
    setContentArray(contentArray.filter((x) => x[0] !== id));
  };
  const showPanel = (id) => {
    document.getElementById(`panel-${id}`).style.display = "";
  };
  return (
    <div className="App">
      <Icon title={"yeet"} />
      <Icon title={"yeet"} />
      <Icon title={"yeet"} />
      <Taskbar>
        {contentArray.map((x) => (
          <TaskbarTab
            key={x[0]}
            showPanel={showPanel}
            updateIndex={updateIndex}
            id={x[0]}
            title={x[1]}
          ></TaskbarTab>
        ))}
      </Taskbar>
      {contentArray.map((x) => (
        <Panel
          key={x[0]}
          closePanel={closePanel}
          updateIndex={updateIndex}
          id={x[0]}
          title={x[1]}
        >
          <textarea></textarea>
        </Panel>
      ))}
    </div>
  );
}

export default App;
