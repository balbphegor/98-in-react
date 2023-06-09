import React, { useState, useEffect } from "react";

function Clock() {
  const [clockState, setClockState] = useState();
  useEffect(() => {
    setInterval(
      () => {
        const date = new Date();
        setClockState(date.toLocaleTimeString());
      },
      1000,
      []
    );
  });
  return <div className="clock-text">{clockState}</div>;
}
export default Clock;
