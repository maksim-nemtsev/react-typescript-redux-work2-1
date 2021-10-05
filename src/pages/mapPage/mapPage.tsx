import React from "react";
import { Col, Row } from "reactstrap";
import MapWrapper from "../../components/Map/MapWrapper";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import ButtonsYears from "../../components/UI/ButtonsYears/ButtonsYears";

const mapPage: React.FC = () => {
  return (
    <div className="map-page">
      <NavigationMenu />
      <h2 className="map__title">MAP</h2>
      <Row>
        <Col sm={{ size: 4, order: 2, offset: 9 }}>
          <ButtonsYears />
        </Col>
      </Row>
      <MapWrapper displayMode={true} />
    </div>
  );
};

export default mapPage;
