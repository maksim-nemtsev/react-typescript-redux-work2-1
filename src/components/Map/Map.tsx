import React from "react";
import MapHighchartsFC from "../MapHighcharts/MapHighchartsFC";

const Map: React.FC = () => {
  console.log("🚀 ~ file: Map.tsx ~ line 13 ~ Map");
  return (
    <div>
      <MapHighchartsFC />
    </div>
  );
};

export default React.memo(Map);
