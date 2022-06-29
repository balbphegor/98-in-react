import React, { useState } from "react";
import "./App.css";
import Panel from "./Panel";
import Taskbar from "./Taskbar";
import TaskbarTab from "./TaskbarTab";
import Icon from "./Icon";
function App() {
  // z-index counter
  const [foremostIndex, setForemostIndex] = useState(1);
  /// panel index counter
  const [distId, setDistId] = useState(1);
  const updateIndex = (id) => {
    setForemostIndex(foremostIndex + 1);
    document.getElementById(`panel-${id}`).style.zIndex = foremostIndex;
  };
  const [contentArray, setContentArray] = useState([[0, "About me!"]]);
  const closePanel = (id) => {
    setContentArray(contentArray.filter((x) => x[0] !== id));
  };
  const showPanel = (id) => {
    document.getElementById(`panel-${id}`).style.display = "";
  };
  const createPanel = (title) => {
    setContentArray([...contentArray, [distId, title]]);
    setDistId(distId + 1);
  };
  return (
    <div className="App">
      <div className="desktop-container">
        <Icon createPanel={createPanel} title={"About Me!"} />
        <Icon createPanel={createPanel} title={"Linked-in"} />
        <Icon createPanel={createPanel} title={"Github"} />
        <Icon createPanel={createPanel} title={"Contact me!"} />
        <Icon createPanel={createPanel} title={"blogatog .html"} />
        <Icon createPanel={createPanel} title={"memes"} />
        <Icon createPanel={createPanel} title={"celery man"} />
        <Icon createPanel={createPanel} title={"my watch list"} />
      </div>
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
