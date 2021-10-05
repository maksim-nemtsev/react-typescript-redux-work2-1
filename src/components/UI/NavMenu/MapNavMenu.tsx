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

const MapNavMenu: React.FC = () => {
  const [tooltipOpen1, setTooltipOpen1] = useState(false);
  const [tooltipOpen2, setTooltipOpen2] = useState(false);
  const [tooltipOpen3, setTooltipOpen3] = useState(false);
  const [tooltipOpen4, setTooltipOpen4] = useState(false);

  const toggle1 = () => setTooltipOpen1(!tooltipOpen1);
  const toggle2 = () => setTooltipOpen2(!tooltipOpen2);
  const toggle3 = () => setTooltipOpen3(!tooltipOpen3);
  const toggle4 = () => setTooltipOpen4(!tooltipOpen4);

  return (
    <MapNavContainer>
      <MapNavItem>
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
      <MapNavItem>
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
      <MapNavItem>
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
      <MapNavItem>
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
