import React from "react";
import MapMacroStockList from "./MapMacroStockList";
import "./MapMacroStock.css";
import ButtonsToolbarMacro from "../UI/ButtonsToolbarMacro/ButtonsToolbarMacro";
import countryTur from "../../assets/svg/country-tur.svg";
import { Button } from "reactstrap";
import arrowRightSVG from "../../assets/svg/arrow-right.svg";
import plusSVG from "../../assets/svg/plus.svg";

interface Props {}

const MapMacroStock = (props: Props) => {
  return (
    <div className="map-stock-wrapper">
      <div className="map-stock__header">
        <img className="country" src={countryTur} alt="country" />
        <div className="map-stock__country">
          <span className="map-stock__title">Арабские Эммираты</span>
        </div>
        <ButtonsToolbarMacro />
      </div>
      <div className="map-stock">
        <div className="map-stock__content">
          <MapMacroStockList />
        </div>
      </div>
      <div className="map-stock__footer">
        <Button className="btn map-stock__btn" color="link">
          ADD ANOTHER
          <img className="map-stock__icon-plus" src={plusSVG} alt="right" />
        </Button>
        <Button className="btn map-stock__btn" color="link">
          MORE
          <img
            className="map-stock__icon-arrow"
            src={arrowRightSVG}
            alt="right"
          />
        </Button>
      </div>
    </div>
  );
};

export default MapMacroStock;
