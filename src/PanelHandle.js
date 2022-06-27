import React, { useEffect, useRef } from "react";

const PanelHandle = () => {
  const handleRef = useRef(null);
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div ref={handleRef} className="panel-handle">
      title
    </div>
  );
};
export default PanelHandle;
