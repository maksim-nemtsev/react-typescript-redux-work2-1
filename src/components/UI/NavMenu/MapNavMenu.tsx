import React, { useState } from "react";
import "./MapNavMenu.css";
import search from "../../../assets/svg/map/search.svg";
import world from "../../../assets/svg/map/world.svg";
import graf from "../../../assets/svg/map/graf.svg";
import save from "../../../assets/svg/map/save.svg";
import styled from "styled-components";
import { Tooltip } from "reactstrap";

const MapNavContainer = styled.div`
  position: absolute;
  top: 20%;
  z-index: 2;
`;
const MapNavBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  flex-grow: 0;
  padding: 0.75rem;
  margin-right: 1.25rem;
  background-color: #fff;
  border-radius: 50%;
`;
const MapNavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const MapNavTitle = styled.span`
  font-family: ArticulatCF;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000b20;
`;

const MapNavMenu: React.FC = () => {
  const [menuToggle, setMenuTogle] = useState(false);
  const [tooltipOpen1, setTooltipOpen1] = useState(false);
  const [tooltipOpen2, setTooltipOpen2] = useState(false);
  const [tooltipOpen3, setTooltipOpen3] = useState(false);
  const [tooltipOpen4, setTooltipOpen4] = useState(false);

  const toggle1 = () => setTooltipOpen1(!tooltipOpen1);
  const toggle2 = () => setTooltipOpen2(!tooltipOpen2);
  const toggle3 = () => setTooltipOpen3(!tooltipOpen3);
  const toggle4 = () => setTooltipOpen4(!tooltipOpen4);

  const onMouseEnterMenuItem = () => {
    console.log("entere");
    setMenuTogle(true);
  };
  const onMouseLeaveMenuItem = () => {
    console.log("entere");
    setMenuTogle(false);
  };

  return (
    <MapNavContainer>
      <MapNavItem
        onMouseEnter={() => onMouseEnterMenuItem()}
        onMouseLeave={() => onMouseLeaveMenuItem()}
      >
        <MapNavBlock>
          <img id="Search" className="map-nav__img" src={search} alt="search" />
        </MapNavBlock>
        <Tooltip
          placement="right"
          isOpen={tooltipOpen1}
          target="Search"
          toggle={toggle1}
        >
          Search
        </Tooltip>
      </MapNavItem>
      <MapNavItem
        onMouseEnter={() => onMouseEnterMenuItem()}
        onMouseLeave={() => onMouseLeaveMenuItem()}
      >
        <MapNavBlock>
          <img
            id="TooltipExample"
            className="map-nav__img"
            src={world}
            alt="Mode"
          />
        </MapNavBlock>
        <Tooltip
          placement="right"
          isOpen={tooltipOpen2}
          target="TooltipExample"
          toggle={toggle2}
        >
          Mode
        </Tooltip>
      </MapNavItem>
      <MapNavItem
        onMouseEnter={() => onMouseEnterMenuItem()}
        onMouseLeave={() => onMouseLeaveMenuItem()}
      >
        <MapNavBlock>
          <img id="Type" className="map-nav__img" src={graf} alt="search" />
        </MapNavBlock>
        <Tooltip
          placement="right"
          isOpen={tooltipOpen3}
          target="Type"
          toggle={toggle3}
        >
          Type
        </Tooltip>
      </MapNavItem>
      <MapNavItem
        onMouseEnter={() => onMouseEnterMenuItem()}
        onMouseLeave={() => onMouseLeaveMenuItem()}
      >
        <MapNavBlock>
          <img id="Save" className="map-nav__img" src={save} alt="Save" />
        </MapNavBlock>
        <Tooltip
          placement="right"
          isOpen={tooltipOpen4}
          target="Save"
          toggle={toggle4}
        >
          Save
        </Tooltip>
      </MapNavItem>
    </MapNavContainer>
  );
};

export default MapNavMenu;
