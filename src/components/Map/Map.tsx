import React from "react";
import MapHighchartsFC from "../MapHighcharts/MapHighchartsFC";
import MapNews from "../MapNews/MapNews";

const Map: React.FC = () => {
  console.log("🚀 ~ file: Map.tsx ~ line 13 ~ Map");
  return (
    <div className="map">
      <MapHighchartsFC />
    </div>
  );
};

export default React.memo(Map);
