import React from "react";
import MapWrapper from "../../components/Map/MapWrapper";
import MapNavigation from "../../components/MapNavigation/MapNavigation";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";

interface Props {}

const mapPage: React.FC = (props: Props) => {
  return (
    <div>
      <NavigationMenu />
      <h2>MAP</h2>
      <MapNavigation/>
      <MapWrapper displayMode={true} />
    </div>
  );
};

export default mapPage;
