import React from "react";
import CountriesAndRegions from "./CountriesAndRegions/CountriesAndRegions";
import Industries from "./Industries/Industries";
import "./PortfolioPageNav.css";
import Risks from "./Risks/Risks";
import Segment from "./Segment/Segment";
import Size from "./Size/Size";
import TimeFrames from "./TimeFrames/TimeFrames";

const PortfolioPageNav = () => {
  return (
    <div className="nav main d-none d-lg-block">
      <ul className="nav__list portfolio">
        <li className="nav__item portfolio">
          <Segment />
        </li>
        <li className="nav__item portfolio">
          <CountriesAndRegions />
        </li>
        <li className="nav__item portfolio">
          <Industries />
        </li>
        <li className="nav__item portfolio">
          <TimeFrames />
        </li>
        <li className="nav__item portfolio">
          <Size />
        </li>
        <li className="nav__item portfolio">
          <Risks />
        </li>
      </ul>
    </div>
  );
};

export default PortfolioPageNav;
