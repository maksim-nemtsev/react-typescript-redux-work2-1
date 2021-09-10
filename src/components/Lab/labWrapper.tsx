import React from "react";
import Lab from "./Lab";

interface IDisplayMode {
  displayMode: boolean;
}

const LabWrapper: React.FC<IDisplayMode> = (props: IDisplayMode) => {
  console.log("🚀 ~ file: Map.tsx ~ line 13 ~ Map");

  let show = props.displayMode ? "block" : "none";
  return (
    <div style={{ display: show }}>
      <Lab />
    </div>
  );
};

export default LabWrapper;
