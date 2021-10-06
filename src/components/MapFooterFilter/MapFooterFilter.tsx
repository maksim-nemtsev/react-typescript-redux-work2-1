import React from "react";
import CountriesAndRegions from "../App/PortfolioPageNav/CountriesAndRegions/CountriesAndRegions";
import Risks from "../App/PortfolioPageNav/Risks/Risks";
import "./MapFooterFilter.css";

interface Props {}

const MapFooterFilter = (props: Props) => {
  return (
    <div className="nav main">
      <ul className="nav__list portfolio">
        <li className="nav__item portfolio">
          <CountriesAndRegions />
        </li>
        <li className="nav__item portfolio">
          <Risks />
        </li>
      </ul>
    </div>
  );
};

export default MapFooterFilter;
