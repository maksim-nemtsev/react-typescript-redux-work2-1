import React, { useState } from "react";
import "./MapNavMenu.css";
import arrowRight from "../../../assets/svg/arrow-right.svg";
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
import menuOpen from "../../../assets/svg/map/menu-open.svg";
import doubleType from "../../../assets/svg/map/double.svg";
import deleteType from "../../../assets/svg/map/delete.svg";
import arrowLeft from "../../../assets/svg/card-page/arrow-left.svg";
import styled from "styled-components";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  ModalFooter,
  Nav,
  TabContent,
  TabPane,
  Tooltip,
} from "reactstrap";
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
  cursor: pointer;
`;
const ModalBodyCountiesListItemMenu = styled.div``;
const ModalSaveMenuOpen = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MapNavMenu: React.FC = () => {
  const [tooltipOpen1, setTooltipOpen1] = useState(false);
  const [tooltipOpen2, setTooltipOpen2] = useState(false);
  const [tooltipOpen3, setTooltipOpen3] = useState(false);
  const [tooltipOpen4, setTooltipOpen4] = useState(false);
  const [modalSearch, setModalSearch] = useState(false);
  const [modalMode, setModalMode] = useState(false);
  const [modalType, setModalType] = useState(false);
  const [modalSave, setModalSave] = useState(false);
  const [countriesList, setCountriesList] = useState(false);
  const [coutryBorderBottom, setCoutryBorderBottom] = useState(false);
  const [dropDownSaveMenuOpen, setDropDownSaveMenuOpen] = useState(false);
  const [saveContenShow, setSaveContenShow] = useState(true);
  const [isDeleteWindowOpen, setIsDeleteWindowOpen] = useState(false);
  const [isSaveWindowOpen, setIsSaveWindowOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const toggleCountriesMenu = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    setCountriesList(!countriesList);
    setCoutryBorderBottom(!coutryBorderBottom);
  };

  const toggleModalSearch = () => setModalSearch(!modalSearch);
  const externalSearchCloseBtn = (
    <button className="modal-search__close" onClick={toggleModalSearch}>
      &times;
    </button>
  );
  const toggleModalMode = () => setModalMode(!modalMode);
  const externalModeCloseBtn = (
    <button className="modal-mode__close" onClick={toggleModalMode}>
      &times;
    </button>
  );
  const toggleModalType = () => setModalType(!modalType);
  const externalTypeCloseBtn = (
    <button className="modal-type__close" onClick={toggleModalType}>
      &times;
    </button>
  );
  const toggleModalSave = () => setModalSave(!modalSave);
  const externalSaveCloseBtn = (
    <button className="modal-save__close" onClick={toggleModalSave}>
      &times;
    </button>
  );

  const openModalDelete = () => {
    setSaveContenShow(false);
    setIsDeleteWindowOpen(true);
  };

  const closeModalDelete = () => {
    setIsDeleteWindowOpen(false);
    setSaveContenShow(true);
  };

  const openModalSave = () => {
    setIsDeleteWindowOpen(false);
    setSaveContenShow(false);
    setIsSaveWindowOpen(true);
  };

  const closeModalSave = () => {
    setIsSaveWindowOpen(false);
    setSaveContenShow(true);
  };

  const toggle1 = () => setTooltipOpen1(!tooltipOpen1);
  const toggle2 = () => setTooltipOpen2(!tooltipOpen2);
  const toggle3 = () => setTooltipOpen3(!tooltipOpen3);
  const toggle4 = () => setTooltipOpen4(!tooltipOpen4);

  const countriesMenuArray = [
    { country: "Commercial services", id: "1" },
    { country: "Connection services", id: "2" },
    { country: "Contact services", id: "3" },
    { country: "Other services", id: "4" },
    { country: "Other services", id: "5" },
    { country: "Other services", id: "6" },
  ];

  const isToggleSaveMenuOpen = () => {
    setDropDownSaveMenuOpen((prevState) => !prevState);
  };

  return (
    <MapNavContainer>
      <MapNavItem key="MapNavItem1" onClick={() => toggleModalSearch()}>
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
          external={externalSearchCloseBtn}
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
                  <ModalBodyCountiesListItem
                    onClick={(e) => toggleCountriesMenu(e)}
                  >
                    <img
                      className="modal-country__img"
                      src={ajary}
                      alt="country"
                    />
                    Грузия
                    {coutryBorderBottom && (
                      <DropdownItem className="mb-4 mt-4" divider />
                    )}
                    <ModalBodyCountiesListItemMenu>
                      {countriesList &&
                        countriesMenuArray.map((el) => (
                          <div key={el.id} className="county-list-item active">
                            <span>{el.country}</span>
                            <img
                              width="6px"
                              height="12px"
                              src={arrowRight}
                              alt="open"
                            />
                          </div>
                        ))}
                    </ModalBodyCountiesListItemMenu>
                  </ModalBodyCountiesListItem>
                  <ModalBodyCountiesListItem
                    onClick={(e) => toggleCountriesMenu(e)}
                  >
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
      <MapNavItem key="MapNavItem2" onClick={() => toggleModalMode()}>
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
        <Modal
          isOpen={modalMode}
          toggle={toggleModalMode}
          className="modal-mode"
          external={externalModeCloseBtn}
        >
          <ModalHeader className="modal-search__header">
            <ModalHeaderTitle>Mode</ModalHeaderTitle>
            <ModalHeaderSubTitle>sub title</ModalHeaderSubTitle>
          </ModalHeader>
          <ModalBody className="modal-mode__body">
            <div>
              <div>
                <Input type="checkbox" />
                <span className="m-3">Countries</span>
              </div>
            </div>
            <DropdownItem className="mb-4 mt-4" divider />
            <div>
              <div>
                <Input type="checkbox" />
                <span className="m-3">Industries</span>
              </div>
            </div>
            <DropdownItem className="mb-4 mt-4" divider />
            <div>
              <div>
                <Input type="checkbox" />
                <span className="m-3">Sectors</span>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </MapNavItem>
      <MapNavItem key="MapNavItem3" onClick={() => toggleModalType()}>
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
        <Modal
          isOpen={modalType}
          toggle={toggleModalType}
          className="modal-mode"
          external={externalTypeCloseBtn}
        >
          <ModalHeader className="modal-search__header">
            <ModalHeaderTitle>Type</ModalHeaderTitle>
            <ModalHeaderSubTitle>sub title</ModalHeaderSubTitle>
          </ModalHeader>
          <ModalBody className="modal-mode__body">
            <div>
              <div>
                <Input type="checkbox" />
                <span className="m-3">Капитализация</span>
              </div>
            </div>
            <DropdownItem className="mb-4 mt-4" divider />
            <div>
              <div>
                <Input type="checkbox" />
                <span className="m-3">Активность и рост</span>
              </div>
            </div>
            <DropdownItem className="mb-4 mt-4" divider />
            <div>
              <div>
                <Input type="checkbox" />
                <span className="m-3">Корпоративный долг</span>
              </div>
            </div>
            <DropdownItem className="mb-4 mt-4" divider />
            <div>
              <div>
                <Input type="checkbox" />
                <span className="m-3">Рентабельность</span>
              </div>
            </div>
            <DropdownItem className="mb-4 mt-4" divider />
            <div>
              <div>
                <Input type="checkbox" />
                <span className="m-3">Маржинальность</span>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </MapNavItem>
      <MapNavItem key="MapNavItem4" onClick={() => toggleModalSave()}>
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
        <Modal
          isOpen={modalSave}
          toggle={toggleModalSave}
          className="modal-mode"
          external={externalSaveCloseBtn}
        >
          {saveContenShow && (
            <div>
              <ModalHeader className="modal-search__header">
                <ModalHeaderTitle>Save</ModalHeaderTitle>
                <ModalHeaderSubTitle>sub title</ModalHeaderSubTitle>
              </ModalHeader>
              <ModalBody className="modal-mode__body">
                <div>
                  <ModalSaveMenuOpen>
                    <div>
                      <Input type="checkbox" />
                      <span className="m-3">Мой тип карты</span>
                    </div>
                    <Dropdown
                      isOpen={dropDownSaveMenuOpen}
                      toggle={isToggleSaveMenuOpen}
                    >
                      <DropdownToggle
                        className="dropdown-save__open"
                        tag="span"
                        data-toggle="dropdown"
                        aria-expanded={dropDownSaveMenuOpen}
                      >
                        <img src={menuOpen} alt="open" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          className="dropdown__contant"
                          onClick={isToggleSaveMenuOpen}
                        >
                          <div className="dropdown__icon">
                            <img src={doubleType} alt="dobule" />
                          </div>
                          <div>Duplicate</div>
                        </DropdownItem>
                        <DropdownItem
                          className="dropdown__contant"
                          onClick={isToggleSaveMenuOpen}
                        >
                          <div className="dropdown__icon">
                            <img src={deleteType} alt="dobule" />
                          </div>
                          <div onClick={openModalDelete}>Delete</div>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </ModalSaveMenuOpen>
                </div>
              </ModalBody>
              <ModalFooter className="modal-footer__search">
                <Button className="btn-modal save" onClick={openModalSave}>
                  Create the Map
                </Button>
              </ModalFooter>
            </div>
          )}
          {isDeleteWindowOpen && (
            <div>
              <ModalHeader onClick={closeModalDelete}>
                <img className="modal-delete__img" src={arrowLeft} alt="back" />
                Delete
              </ModalHeader>
              <ModalBody>
                Внимание, после удаления, восстановление параметра карты будет
                невозможным!
              </ModalBody>
              <ModalFooter className="modal-footer__delete">
                <Button className="btn-modal delete" onClick={closeModalDelete}>
                  Delete
                </Button>
              </ModalFooter>
            </div>
          )}
          {isSaveWindowOpen && (
            <div>
              <ModalHeader
                onClick={closeModalSave}
                className="modal-save__header"
              >
                <img className="modal-delete__img" src={arrowLeft} alt="back" />
                Save
              </ModalHeader>
              <ModalBody className="modal-mode__body">
                Придумайте название и сохраните текущие параметры карты,чтобы в
                будущем иметь быстрый доступ
                <Input invalid className="mb-4 mt-4" placeholder="map name" />
              </ModalBody>
              <ModalFooter className="modal-save__footer">
                <Button className="btn-modal save" onClick={closeModalSave}>
                  Save the Map
                </Button>
              </ModalFooter>
            </div>
          )}
        </Modal>
      </MapNavItem>
    </MapNavContainer>
  );
};

export default MapNavMenu;
