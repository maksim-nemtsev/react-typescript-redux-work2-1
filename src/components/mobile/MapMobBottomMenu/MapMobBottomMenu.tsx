import React, { useState } from "react";
import "./MapMobBottomMenu.css";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Nav,
  TabContent,
  TabPane,
  Col,
  Row,
  ModalFooter,
  Button,
} from "reactstrap";
import styled from "styled-components";
import ButtonSettings from "../../UI/ButtonSettings/ButtonSettings";
import ButtonsToolbarBoottom from "../../UI/ButtonsToolbar/ButtonsToolbarBoottom";

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

const MapMobBottomMenu = (props: {
  isMobileBottomMenuClose: boolean;
  mobileBottomMenuToggleHandler: () => void;
}) => {
  const { isMobileBottomMenuClose, mobileBottomMenuToggleHandler } = props;
  const externalSearchCloseBtn = (
    <button
      className="modal-search__close d-block d-lg-none"
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
        className="modal-search d-block d-lg-none"
        external={externalSearchCloseBtn}
      >
        <ModalHeader className="modal-search__header">
          <ModalHeaderTitle>Turkey</ModalHeaderTitle>
        </ModalHeader>
        <ModalBody>
          <Nav className="modal-search__nav">
            <Row>
              <Col>
                <p
                  className={
                    activeTab === "1" ? "modal-tabs active" : "modal-tabs"
                  }
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  Turkey
                </p>
                <p
                  className={
                    activeTab === "2" ? "modal-tabs active" : "modal-tabs"
                  }
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  MAKRO
                </p>
              </Col>
              <Col>
                <p
                  className={
                    activeTab === "3" ? "modal-tabs active" : "modal-tabs"
                  }
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  STOCK
                </p>
                <p
                  className={
                    activeTab === "4" ? "modal-tabs active" : "modal-tabs"
                  }
                  onClick={() => {
                    toggle("4");
                  }}
                >
                  HEIGHT
                </p>
              </Col>
              <Col>
                <p
                  className={
                    activeTab === "5" ? "modal-tabs active" : "modal-tabs"
                  }
                  onClick={() => {
                    toggle("5");
                  }}
                >
                  DECLINE
                </p>
              </Col>
              <Col>
                <p
                  className={
                    activeTab === "6" ? "modal-tabs active" : "modal-tabs"
                  }
                  onClick={() => {
                    toggle("6");
                  }}
                >
                  ACTIVITY
                </p>
              </Col>
            </Row>
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
                <p className="map-mob-coutry-info__last-close">
                  Unemployed
                  <span className="map-mob-coutry-info__last-close-count">
                    13.2%
                  </span>
                </p>
                <p className="map-mob-coutry-info__last-close">
                  Unemployed
                  <span className="map-mob-coutry-info__last-close-count">
                    13.2%
                  </span>
                </p>
                <p className="map-mob-coutry-info__last-close">
                  Unemployed
                  <span className="map-mob-coutry-info__last-close-count">
                    13.2%
                  </span>
                </p>
                <p className="map-mob-coutry-info__last-close">
                  Unemployed
                  <span className="map-mob-coutry-info__last-close-count">
                    13.2%
                  </span>
                </p>
                <p className="map-mob-coutry-info__last-close">
                  Unemployed
                  <span className="map-mob-coutry-info__last-close-count">
                    13.2%
                  </span>
                </p>
                <p className="map-mob-coutry-info__last-close">
                  Unemployed
                  <span className="map-mob-coutry-info__last-close-count">
                    13.2%
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
            <TabPane tabId="2">
              <div className="map-mob-stock">
                <div>
                  <div>
                    <p className="map-mob-stock-info__last-close">
                      GDP
                      <span className="map-mob-stock-info__last-close-count">
                        -36,5700 %
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="d-flex w-50 justify-content-between">
                    <div>
                      <p className="map-mob-stock-info__last-close">
                        2021
                        <span className="map-mob-stock-info__last-close-count">
                          740
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="map-mob-stock-info__last-close">
                        2021
                        <span className="map-mob-stock-info__last-close-count">
                          740
                        </span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="map-mob-stock-info__last-close">
                      GDP
                      <span className="map-mob-stock-info__last-close-count">
                        -36,5700 %
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="map-mob-stock-info__last-close">
                      GDP
                      <span className="map-mob-stock-info__last-close-count">
                        -36,5700 %
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="map-mob-stock-info__last-close">
                      GDP
                      <span className="map-mob-stock-info__last-close-count">
                        -36,5700 %
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="map-mob-stock-info__last-close">
                      GDP
                      <span className="map-mob-stock-info__last-close-count">
                        -36,5700 %
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="map-mob-stock-info__last-close">
                      GDP
                      <span className="map-mob-stock-info__last-close-count">
                        -36,5700 %
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="map-mob-stock-info__last-close">
                      GDP
                      <span className="map-mob-stock-info__last-close-count">
                        -36,5700 %
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="d-flex w-50 justify-content-between">
                    <div>
                      <p className="map-mob-stock-info__last-close">
                        2021
                        <span className="map-mob-stock-info__last-close-count">
                          740
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="map-mob-stock-info__last-close">
                        2021
                        <span className="map-mob-stock-info__last-close-count">
                          740
                        </span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="map-mob-stock-info__last-close">
                      GDP
                      <span className="map-mob-stock-info__last-close-count">
                        -36,5700 %
                      </span>
                    </p>
                  </div>
                </div>
                <hr />
                <div>
                  <p className="map-mob-stock-info__last-close">
                    Unemployed Rate
                    <span className="map-mob-stock-info__last-close-count">
                      13.2 % (May/21)
                    </span>
                  </p>
                </div>
                <div>
                  <p className="map-mob-stock-info__last-close">
                    Unemployed Rate
                    <span className="map-mob-stock-info__last-close-count">
                      13.2 % (May/21)
                    </span>
                  </p>
                </div>
                <div>
                  <p className="map-mob-stock-info__last-close">
                    Unemployed Rate
                    <span className="map-mob-stock-info__last-close-count">
                      13.2 % (May/21)
                    </span>
                  </p>
                </div>
                <div>
                  <p className="map-mob-stock-info__last-close">
                    Unemployed Rate
                    <span className="map-mob-stock-info__last-close-count">
                      13.2 % (May/21)
                    </span>
                  </p>
                </div>
                <div>
                  <p className="map-mob-stock-info__last-close">
                    Unemployed Rate
                    <span className="map-mob-stock-info__last-close-count">
                      13.2 % (May/21)
                    </span>
                  </p>
                </div>
                <div>
                  <p className="map-mob-stock-info__last-close">
                    Unemployed Rate
                    <span className="map-mob-stock-info__last-close-count">
                      13.2 % (May/21)
                    </span>
                  </p>
                </div>
                <div>
                  <p className="map-mob-stock-info__last-close">
                    Unemployed Rate
                    <span className="map-mob-stock-info__last-close-count">
                      13.2 % (May/21)
                    </span>
                  </p>
                </div>
                <div>
                  <p className="map-mob-stock-info__last-close">
                    Unemployed Rate
                    <span className="map-mob-stock-info__last-close-count">
                      13.2 % (May/21)
                    </span>
                  </p>
                </div>
                <div>
                  <p className="map-mob-stock-info__last-close">
                    Unemployed Rate
                    <span className="map-mob-stock-info__last-close-count">
                      13.2 % (May/21)
                    </span>
                  </p>
                </div>
                <div>
                  <p className="map-mob-stock-info__last-close">
                    Unemployed Rate
                    <span className="map-mob-stock-info__last-close-count">
                      13.2 % (May/21)
                    </span>
                  </p>
                </div>
                <div>
                  <p className="map-mob-stock-info__last-close">
                    Unemployed Rate
                    <span className="map-mob-stock-info__last-close-count">
                      13.2 % (May/21)
                    </span>
                  </p>
                </div>
                <div>
                  <p className="map-mob-stock-info__last-close">
                    Unemployed Rate
                    <span className="map-mob-stock-info__last-close-count">
                      13.2 % (May/21)
                    </span>
                  </p>
                </div>
              </div>
              <ModalFooter className="m-0 p-0">
                <Button>ADD ANOTHER +</Button>
                <Button>MORE</Button>
              </ModalFooter>
            </TabPane>
            <TabPane tabId="3">
              <div className="map-mob-stock">
                <ModalBody>
                  <p className="map-mob-stock-info__last-close">
                    Unemployed
                    <span className="map-mob-stock-info__last-close-count">
                      13.2%
                    </span>
                  </p>
                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="map-mob-stock-info__last-close">
                        D
                        <span className="map-mob-stock-info__last-close-count">
                          -36,5700 %
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="map-mob-stock-info__last-close">
                        D
                        <span className="map-mob-stock-info__last-close-count">
                          -36,5700 %
                        </span>
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="sector">
                    <p className="gain-sector__title">Gain Sector</p>
                    <div>
                      <div className="mb-1">Энергетика</div>
                      <p className="map-mob-stock-info__last-close">
                        D
                        <span className="map-mob-stock-info__last-close-count">
                          -36,5700 %
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="sector">
                    <p className="gain-sector__title">Loser Sector</p>
                    <div>
                      <div className="mb-1">Энергетика</div>
                      <p className="map-mob-stock-info__last-close">
                        D
                        <span className="map-mob-stock-info__last-close-count">
                          -36,5700 %
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="sector">
                    <p className="gain-sector__title">Loser Sector</p>
                    <div>
                      <div className="mb-1">Энергетика</div>
                      <p className="map-mob-stock-info__last-close">
                        D
                        <span className="map-mob-stock-info__last-close-count">
                          -36,5700 %
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="sector">
                    <p className="gain-sector__title">Loser Sector</p>
                    <div>
                      <div className="mb-1">Энергетика</div>
                      <p className="map-mob-stock-info__last-close">
                        D
                        <span className="map-mob-stock-info__last-close-count">
                          -36,5700 %
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="sector">
                    <p className="gain-sector__title">Loser Sector</p>
                    <div>
                      <div className="mb-1">Энергетика</div>
                      <p className="map-mob-stock-info__last-close">
                        D
                        <span className="map-mob-stock-info__last-close-count">
                          -36,5700 %
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="sector">
                    <p className="gain-sector__title">Loser Sector</p>
                    <div>
                      <div className="mb-1">Энергетика</div>
                      <p className="map-mob-stock-info__last-close">
                        D
                        <span className="map-mob-stock-info__last-close-count">
                          -36,5700 %
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="sector">
                    <p className="gain-sector__title">Loser Sector</p>
                    <div>
                      <div className="mb-1">Энергетика</div>
                      <p className="map-mob-stock-info__last-close">
                        D
                        <span className="map-mob-stock-info__last-close-count">
                          -36,5700 %
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="sector">
                    <p className="gain-sector__title">Loser Sector</p>
                    <div>
                      <div className="mb-1">Энергетика</div>
                      <p className="map-mob-stock-info__last-close">
                        D
                        <span className="map-mob-stock-info__last-close-count">
                          -36,5700 %
                        </span>
                      </p>
                    </div>
                  </div>
                </ModalBody>
              </div>
              <ModalFooter className="m-0 p-0">
                <Button>ADD ANOTHER +</Button>
                <Button>MORE</Button>
              </ModalFooter>
            </TabPane>
            <TabPane tabId="4">
              <div className="map-mob-height">
                <div className="height">
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>2. Казино и азартные игры</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>3. Отели, курорты и крузные</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>4. Радиовещание</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>5. Авиалинии</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>6. Золото</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>7. Коммерческая печать</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                </div>
              </div>
              <ModalFooter className="modal-footer__content">
                <div>
                  <ButtonSettings />
                </div>
                <div>
                  <ButtonsToolbarBoottom />
                </div>
              </ModalFooter>
            </TabPane>
            <TabPane tabId="5">
              <div className="map-mob-height">
                <div className="height">
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>2. Казино и азартные игры</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>3. Отели, курорты и крузные</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>4. Радиовещание</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>5. Авиалинии</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>6. Золото</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>7. Коммерческая печать</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                </div>
              </div>
              <ModalFooter className="modal-footer__content">
                <div>
                  <ButtonSettings />
                </div>
                <div>
                  <ButtonsToolbarBoottom />
                </div>
              </ModalFooter>
            </TabPane>
            <TabPane tabId="6">
              <div className="map-mob-height">
                <div className="height">
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>2. Казино и азартные игры</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>3. Отели, курорты и крузные</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>4. Радиовещание</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>5. Авиалинии</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>6. Золото</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>7. Коммерческая печать</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                  <div className="height__list d-flex justify-content-between">
                    <div className="height__list-item">
                      <p>1. Инвестиционные фонды</p>
                    </div>
                    <div className="height__list-count">
                      <span>(3,15) D</span>
                    </div>
                  </div>
                </div>
              </div>
              <ModalFooter className="modal-footer__content">
                <div>
                  <ButtonSettings />
                </div>
                <div>
                  <ButtonsToolbarBoottom />
                </div>
              </ModalFooter>
            </TabPane>
          </TabContent>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default MapMobBottomMenu;
