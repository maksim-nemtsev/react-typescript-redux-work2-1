import React from "react";
import MapWrapper from "../../components/Map/MapWrapper";
import MapNavigation from "../../components/MapNavigation/MapNavigation";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";

  const titles = {
    capitalization: "CAPITALIZATION",
    activity: "ACTIVITY & GROWTH",
    corporate: "CORPORATE DEBT",
    profitability: "PROFITABILITY",
    marginality: "MARGINALITY",
  };

const mapPage: React.FC = () => {

  return (
    <div className="map-page">
      <NavigationMenu />
      <h2 className="map__title">MAP</h2>
      <MapNavigation titles={titles}  />
      <MapWrapper displayMode={true} />
    </div>
  );
};

export default mapPage;
