import React from "react";
import Map from "./Map";

interface IDisplayMode {
  displayMode: boolean;
}

const MapWrapper: React.FC<IDisplayMode> = (props: IDisplayMode) => {
  let show = props.displayMode ? "block" : "none";
  return (
    <div style={{ display: show }}>
      <Map />
    </div>
  );
};

export default MapWrapper;
