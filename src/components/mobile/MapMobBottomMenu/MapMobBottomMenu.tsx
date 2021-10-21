import React, { useState } from "react";
import "./MapMobBottomMenu.css";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Nav,
  TabContent,
  TabPane,
} from "reactstrap";
import styled from "styled-components";

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

const MapMobBottomMenu = (props: {
  isMobileBottomMenuClose: boolean;
  mobileBottomMenuToggleHandler: () => void;
}) => {
  const { isMobileBottomMenuClose, mobileBottomMenuToggleHandler } = props;
  const externalSearchCloseBtn = (
    <button
      className="modal-search__close"
      onClick={mobileBottomMenuToggleHandler}
    >
      &times;
    </button>
  );
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="d-block d-lg-none">
      <Modal
        isOpen={isMobileBottomMenuClose}
        toggle={mobileBottomMenuToggleHandler}
        className="modal-search"
        external={externalSearchCloseBtn}
      >
        <ModalHeader className="modal-search__header">
          <ModalHeaderTitle>Search</ModalHeaderTitle>
          <ModalHeaderSubTitle>Searching...</ModalHeaderSubTitle>
        </ModalHeader>
        <ModalBody>
          <Nav className="modal-search__nav">
            <span
              className={activeTab === "1" ? "modal-tabs active" : "modal-tabs"}
              onClick={() => {
                toggle("1");
              }}
            >
              Turkey
            </span>
            <span
              className={activeTab === "2" ? "modal-tabs active" : "modal-tabs"}
              onClick={() => {
                toggle("2");
              }}
            >
              MAKRO
            </span>
            <span
              className={activeTab === "3" ? "modal-tabs active" : "modal-tabs"}
              onClick={() => {
                toggle("3");
              }}
            >
              STOCK
            </span>
            <span
              className={activeTab === "4" ? "modal-tabs active" : "modal-tabs"}
              onClick={() => {
                toggle("4");
              }}
            >
              HEIGHT
            </span>
            <span
              className={activeTab === "5" ? "modal-tabs active" : "modal-tabs"}
              onClick={() => {
                toggle("5");
              }}
            >
              DECLINE
            </span>
            <span
              className={activeTab === "6" ? "modal-tabs active" : "modal-tabs"}
              onClick={() => {
                toggle("6");
              }}
            >
              ACTIVITY
            </span>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <div className="map-mob-coutry-info__content">
                <p className="map-mob-coutry-info__last-close">
                  Last close market cap (size)
                  <span className="map-mob-coutry-info__last-close-count">
                    $ 186,30 B
                  </span>
                </p>
                <p className="map-mob-coutry-info__last-close">
                  Last close market cap (size) ~ Changes
                  <span className="map-mob-coutry-info__last-close-count">
                    (3,15) D
                  </span>
                </p>
                <p className="map-mob-coutry-info__last-close">
                  Change
                  <span className="map-mob-coutry-info__last-close-count">
                    -36,57%
                  </span>
                </p>
                <p className="map-mob-coutry-info__last-close">
                  Activity
                  <span className="map-mob-coutry-info__last-close-count">
                    1,29%
                  </span>
                </p>
                <p className="map-mob-coutry-info__last-close">
                  Corp debt load
                  <span className="map-mob-coutry-info__last-close-count">
                    1062,2771%
                  </span>
                </p>
                <p className="map-mob-coutry-info__last-close">
                  Profitability
                  <span className="map-mob-coutry-info__last-close-count">
                    18.415%
                  </span>
                </p>
                <p className="map-mob-coutry-info__last-close">
                  GDP growth (YOY)
                  <span className="map-mob-coutry-info__last-close-count">
                    1.7%
                  </span>
                </p>
                <p className="map-mob-coutry-info__last-close">
                  Inflation
                  <span className="map-mob-coutry-info__last-close-count">
                    18.95%
                  </span>
                </p>
                <p className="map-mob-coutry-info__last-close">
                  Interest rate
                  <span className="map-mob-coutry-info__last-close-count">
                    19%
                  </span>
                </p>
                <p className="map-mob-coutry-info__last-close">
                  Unemployed
                  <span className="map-mob-coutry-info__last-close-count">
                    13.2%
                  </span>
                </p>
              </div>
            </TabPane>
            <TabPane tabId="2">MAKRO</TabPane>
            <TabPane tabId="3">STOCK</TabPane>
            <TabPane tabId="4">HEIGHT</TabPane>
            <TabPane tabId="5">DECLINE</TabPane>
            <TabPane tabId="6">ACTIVITY</TabPane>
          </TabContent>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default MapMobBottomMenu;
