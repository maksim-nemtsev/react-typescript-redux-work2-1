import React from "react";
import MapHighchartsFC from "../MapHighcharts/MapHighchartsFC";

const Map: React.FC = () => {
  return (
    <div className="map">
      <MapHighchartsFC />
    </div>
  );
};

export default React.memo(Map);
