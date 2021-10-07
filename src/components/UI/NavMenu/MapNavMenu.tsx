import React, { useState } from "react";
import "./MapNavMenu.css";
import search from "../../../assets/svg/map/search.svg";
import world from "../../../assets/svg/map/world.svg";
import graf from "../../../assets/svg/map/graf.svg";
import save from "../../../assets/svg/map/save.svg";
import ajary from "../../../assets/svg/country/aj.svg";
import kongo from "../../../assets/svg/country/kongo.svg";
import estony from "../../../assets/svg/country/eston.svg";
import senegal from "../../../assets/svg/country/seneg.svg";
import parag from "../../../assets/svg/country/par.svg";
import italy from "../../../assets/svg/country/ital.svg";
import styled from "styled-components";
import { Input, Nav, TabContent, TabPane, Tooltip } from "reactstrap";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

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

const ModalHeaderTitle = styled.p`
  font-size: 2.25rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000b20;
`;
const ModalHeaderSubTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #9faab3;
`;

const ModalBodyCountiesListItem = styled.li`
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000b20;
  margin-bottom: 2.5rem;
  list-style-type: none;
`;

const MapNavMenu: React.FC = () => {
  const [tooltipOpen1, setTooltipOpen1] = useState(false);
  const [tooltipOpen2, setTooltipOpen2] = useState(false);
  const [tooltipOpen3, setTooltipOpen3] = useState(false);
  const [tooltipOpen4, setTooltipOpen4] = useState(false);
  const [modalSearch, setModalSearch] = useState(false);

  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const toggleModalSearch = () => setModalSearch(!modalSearch);
  const externalCloseBtn = (
    <button className="modal-search__close" onClick={toggleModalSearch}>
      &times;
    </button>
  );
  const toggle1 = () => setTooltipOpen1(!tooltipOpen1);
  const toggle2 = () => setTooltipOpen2(!tooltipOpen2);
  const toggle3 = () => setTooltipOpen3(!tooltipOpen3);
  const toggle4 = () => setTooltipOpen4(!tooltipOpen4);

  return (
    <MapNavContainer>
      <MapNavItem onClick={() => toggleModalSearch()}>
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
        <Modal
          isOpen={modalSearch}
          toggle={toggleModalSearch}
          className="modal-search"
          external={externalCloseBtn}
        >
          <ModalHeader className="modal-search__header">
            <ModalHeaderTitle>Search</ModalHeaderTitle>
            <ModalHeaderSubTitle>Searching...</ModalHeaderSubTitle>
          </ModalHeader>
          <ModalBody>
            <Input className="mb-4" placeholder="Search" />
            <Nav className="mb-4">
              <span
                className={
                  activeTab === "1" ? "modal-tabs active" : "modal-tabs"
                }
                onClick={() => {
                  toggle("1");
                }}
              >
                Stock
              </span>
              <span
                className={
                  activeTab === "2" ? "modal-tabs active" : "modal-tabs"
                }
                onClick={() => {
                  toggle("2");
                }}
              >
                Futures
              </span>
              <span
                className={
                  activeTab === "3" ? "modal-tabs active" : "modal-tabs"
                }
                onClick={() => {
                  toggle("3");
                }}
              >
                CFD
              </span>
              <span
                className={
                  activeTab === "4" ? "modal-tabs active" : "modal-tabs"
                }
                onClick={() => {
                  toggle("4");
                }}
              >
                Cryptocurrencies
              </span>
              <span
                className={
                  activeTab === "5" ? "modal-tabs active" : "modal-tabs"
                }
                onClick={() => {
                  toggle("5");
                }}
              >
                Indexes
              </span>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
            
                <ul className="modal-coutries__list">
                  <ModalBodyCountiesListItem>
                    <img
                      className="modal-country__img"
                      src={ajary}
                      alt="country"
                    />
                    Грузия
                  </ModalBodyCountiesListItem>
                  <ModalBodyCountiesListItem>
                    <img
                      className="modal-country__img"
                      src={kongo}
                      alt="country"
                    />
                    ДР Конго
                  </ModalBodyCountiesListItem>
                  <ModalBodyCountiesListItem>
                    <img
                      className="modal-country__img"
                      src={estony}
                      alt="country"
                    />
                    Эстония
                  </ModalBodyCountiesListItem>
                  <ModalBodyCountiesListItem>
                    <img
                      className="modal-country__img"
                      src={senegal}
                      alt="country"
                    />
                    Сенегал
                  </ModalBodyCountiesListItem>
                  <ModalBodyCountiesListItem>
                    <img
                      className="modal-country__img"
                      src={parag}
                      alt="country"
                    />
                    Парагвай
                  </ModalBodyCountiesListItem>
                  <ModalBodyCountiesListItem>
                    <img
                      className="modal-country__img"
                      src={italy}
                      alt="country"
                    />
                    Италия
                  </ModalBodyCountiesListItem>
                  <ModalBodyCountiesListItem>
                    <img
                      className="modal-country__img"
                      src={ajary}
                      alt="country"
                    />
                    Грузия
                  </ModalBodyCountiesListItem>
                  <ModalBodyCountiesListItem>
                    <img
                      className="modal-country__img"
                      src={ajary}
                      alt="country"
                    />
                    ДР Конго
                  </ModalBodyCountiesListItem>
                  <ModalBodyCountiesListItem>
                    <img
                      className="modal-country__img"
                      src={ajary}
                      alt="country"
                    />
                    Эстония
                  </ModalBodyCountiesListItem>
                  <ModalBodyCountiesListItem>
                    <img
                      className="modal-country__img"
                      src={ajary}
                      alt="country"
                    />
                    Сенегал
                  </ModalBodyCountiesListItem>
                  <ModalBodyCountiesListItem>
                    <img
                      className="modal-country__img"
                      src={ajary}
                      alt="country"
                    />
                    Парагвай
                  </ModalBodyCountiesListItem>
                  <ModalBodyCountiesListItem>
                    <img
                      className="modal-country__img"
                      src={italy}
                      alt="country"
                    />
                    Италия
                  </ModalBodyCountiesListItem>
                  <ModalBodyCountiesListItem>
                    <img
                      className="modal-country__img"
                      src={italy}
                      alt="country"
                    />
                    Италия
                  </ModalBodyCountiesListItem>
                  <ModalBodyCountiesListItem>
                    <img
                      className="modal-country__img"
                      src={italy}
                      alt="country"
                    />
                    Италия
                  </ModalBodyCountiesListItem>
                  <ModalBodyCountiesListItem>
                    <img
                      className="modal-country__img"
                      src={italy}
                      alt="country"
                    />
                    Италия
                  </ModalBodyCountiesListItem>
                  <ModalBodyCountiesListItem>
                    <img
                      className="modal-country__img"
                      src={italy}
                      alt="country"
                    />
                    Италия
                  </ModalBodyCountiesListItem>
                  <ModalBodyCountiesListItem>
                    <img
                      className="modal-country__img"
                      src={italy}
                      alt="country"
                    />
                    Италия
                  </ModalBodyCountiesListItem>
                  <ModalBodyCountiesListItem>
                    <img
                      className="modal-country__img"
                      src={italy}
                      alt="country"
                    />
                    Италия
                  </ModalBodyCountiesListItem>
                  <ModalBodyCountiesListItem>
                    <img
                      className="modal-country__img"
                      src={italy}
                      alt="country"
                    />
                    Италия
                  </ModalBodyCountiesListItem>
                  <ModalBodyCountiesListItem>
                    <img
                      className="modal-country__img"
                      src={italy}
                      alt="country"
                    />
                    Италия
                  </ModalBodyCountiesListItem>
                  <ModalBodyCountiesListItem>
                    <img
                      className="modal-country__img"
                      src={italy}
                      alt="country"
                    />
                    Италия
                  </ModalBodyCountiesListItem>
                </ul>
              </TabPane>
              <TabPane tabId="2">Futures</TabPane>
              <TabPane tabId="3">CFD</TabPane>
              <TabPane tabId="4">Cryptocurrencies</TabPane>
              <TabPane tabId="5">Indexes</TabPane>
            </TabContent>
          </ModalBody>
        </Modal>
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
