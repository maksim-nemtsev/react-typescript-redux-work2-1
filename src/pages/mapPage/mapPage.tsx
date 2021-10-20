import React from "react";
import { Col } from "reactstrap";
import MapWrapper from "../../components/Map/MapWrapper";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import ButtonsYears from "../../components/UI/ButtonsYears/ButtonsYears";
import mobFilters from "../../assets/svg/map/mob-filters.svg";
import "./mapPage.css";

type Props = {
  userTarrifId: number;
};
const mapPage = (props: Props) => {
  return (
    <div className="map-page">
      <NavigationMenu userTarrifId={props.userTarrifId} />
      <div className="d-none d-lg-block">
        <h2 className="map__title">MAP</h2>
      </div>
      <div className="map-page__wrapper-top">
        <div>
          <h2 className="map__title">MAP</h2>
        </div>
        <div>
          <img src={mobFilters} alt="filters" />
        </div>
      </div>

      <div className="d-none d-lg-block">
        <Col sm={{ size: 4, order: 2, offset: 9 }}>
          <ButtonsYears />
        </Col>
      </div>
      <MapWrapper displayMode={true} />
    </div>
  );
};

export default mapPage;
