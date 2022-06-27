import Clock from "./Clock";
function Taskbar({ children }) {
  return (
    <div className="task-bar">
      <button id="start-button">
        <img className="start-icon" src={require("./start.png")} alt="10"></img>
        <div className="start-text">start</div>
      </button>
      <div className="divider-long"></div>
      <div className="divider-fat"></div>
      <div className="tab-container">{children}</div>
      <div className="tray right-taskbar">
        <img className="start-icon" src={require("./tray1.png")} alt="10"></img>
        <img className="start-icon" src={require("./tray2.png")} alt="10"></img>
        <Clock />
      </div>
    </div>
  );
}

export default Taskbar;
