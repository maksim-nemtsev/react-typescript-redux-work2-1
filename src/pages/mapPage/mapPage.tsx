import React from "react";
import MapWrapper from "../../components/Map/MapWrapper";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";

interface Props {}

const mapPage: React.FC = (props: Props) => {
  return (
    <div>
      <NavigationMenu />
      <MapWrapper displayMode={true} />
    </div>
  );
};

export default mapPage;
