import React, { useState } from "react";
import PortfolioPageNav from "../../components/App/PortfolioPageNav/PortfolioPageNav";
import PortfolioCards from "../../components/Cards/PortfolioCards";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import "./portfolioPage.css";
import filters from "../../assets/svg/mobile/filters-portfolio-mob.svg";
import favorites from "../../assets/svg/favorites.svg";
import arrowBack from "../../assets/svg/card-page/arrow-left.svg";
import coinsidences from "../../assets/svg/mobile/coinsidences.svg";
import growth from "../../assets/svg/oriented.svg";
import percent from "../../assets/svg/percent.svg";
import money from "../../assets/svg/money.svg";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { AvForm, AvInput } from "availity-reactstrap-validation";
import styled from "styled-components";

const SegmentImgLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Articulat CF;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;

type Props = {
  userTarrifId: number;
};

const PortfolioPage = (props: Props) => {
  const [modal, setModal] = useState(false);
  const [modalSegment, setModalSegment] = useState(false);
  const [modalCountries, setModalCountries] = useState(false);
  const [modalIndustries, setModalIndustries] = useState(false);
  const [modalTimeframes, setModalTimeframes] = useState(false);
  const [modalSize, setModalSize] = useState(false);
  const [modalRisks, setModalRisks] = useState(false);

  const toggleModal = () => setModal(!modal);
  const toggleModalSegment = () => setModalSegment(!modalSegment);
  const toggleModalCountries = () => setModalCountries(!modalCountries);
  const toggleModalIndustries = () => setModalIndustries(!modalIndustries);
  const toggleModalTimeframes = () => setModalTimeframes(!modalTimeframes);
  const toggleModalSize = () => setModalSize(!modalSize);
  const toggleModalRisks = () => setModalRisks(!modalRisks);

  return (
    <div>
      <NavigationMenu userTarrifId={props.userTarrifId} />
      <div className="portfolio-header">
        <div className="portfolio-header__title">
          <h2 className="portfolio__title m-4">HQ FINANCE PORTFOLIO</h2>
        </div>
        <div className="portfolio-header__filters">
          <img
            onClick={toggleModal}
            className="filters"
            src={filters}
            alt="filters"
          />
          <img className="favorites" src={favorites} alt="favorites" />
        </div>
        <Modal className="filters" isOpen={modal} toggle={toggleModal}>
          <ModalBody className="filters_modal-body">
            <div className="filters_modal-body-top">
              <div className="d-flex align-center">
                <span className="close-filters" onClick={toggleModal}>
                  <img src={arrowBack} alt="back" />
                </span>
                <h5 className="filters__title">Filters</h5>
              </div>
              <div className="filters__cancel">
                <span>Cancel</span>
              </div>
            </div>
            <div className="filters__content">
              <div className="filters__list" onClick={toggleModalSegment}>
                <span className="filters__item">Segment</span>
                <Modal
                  className="filters-modal__segment"
                  isOpen={modalSegment}
                  toggle={toggleModalSegment}
                >
                  <ModalBody>
                    <div className="filters-modal__body">
                      <div className="filters-modal__coinsidences">
                        <div className="d-flex">
                          <img
                            className="coinsidences"
                            src={coinsidences}
                            alt="coinsidences"
                          />
                          <SegmentImgLabel>At least one match</SegmentImgLabel>
                        </div>
                        <div>
                          <AvForm className="filters-modal__form">
                            <AvInput
                              style={{ marginLeft: "8px", cursor: "pointer" }}
                              className="segment-input"
                              type="checkbox"
                              name="inOrOut"
                              trueValue="Yes, I'm in!"
                              falseValue="NOPE!"
                            />
                          </AvForm>
                        </div>
                      </div>
                      <div className="filters-modal__coinsidences">
                        <div className="d-flex">
                          <img
                            className="coinsidences"
                            src={growth}
                            alt="coinsidences"
                          />
                          <SegmentImgLabel>
                            Ростоориентированные
                          </SegmentImgLabel>
                        </div>
                        <div>
                          <AvForm className="filters-modal__form">
                            <AvInput
                              style={{ marginLeft: "8px", cursor: "pointer" }}
                              className="segment-input"
                              type="checkbox"
                              name="inOrOut"
                              trueValue="Yes, I'm in!"
                              falseValue="NOPE!"
                            />
                          </AvForm>
                        </div>
                      </div>
                      <div className="filters-modal__coinsidences">
                        <div className="d-flex">
                          <img
                            className="coinsidences"
                            src={percent}
                            alt="coinsidences"
                          />
                          <SegmentImgLabel>Дивидентные</SegmentImgLabel>
                        </div>
                        <div>
                          <AvForm className="filters-modal__form">
                            <AvInput
                              style={{ marginLeft: "8px", cursor: "pointer" }}
                              className="segment-input"
                              type="checkbox"
                              name="inOrOut"
                              trueValue="Yes, I'm in!"
                              falseValue="NOPE!"
                            />
                          </AvForm>
                        </div>
                      </div>
                      <div className="filters-modal__coinsidences">
                        <div className="d-flex">
                          <img
                            className="coinsidences"
                            src={money}
                            alt="coinsidences"
                          />
                          <SegmentImgLabel>Стоимостные</SegmentImgLabel>
                        </div>
                        <div>
                          <AvForm className="filters-modal__form">
                            <AvInput
                              style={{ marginLeft: "8px", cursor: "pointer" }}
                              className="segment-input"
                              type="checkbox"
                              name="inOrOut"
                              trueValue="Yes, I'm in!"
                              falseValue="NOPE!"
                            />
                          </AvForm>
                        </div>
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter className="modal-footer">
                    <div className="modal__footer-btn">
                     <span onClick={toggleModalSegment} className="btn">Сбросить</span>
                    <span className="btn">Применить</span> 
                    </div>
                  </ModalFooter>
                </Modal>
              </div>
              <div className="filters__list" onClick={toggleModalCountries}>
                <span className="filters__item">Country and regions</span>
                <Modal
                  className="filters-modal__segment"
                  isOpen={modalCountries}
                  toggle={toggleModalCountries}
                >
                  <ModalBody>
                    <div className="filters-modal__body">
                      <div className="filters-modal__coinsidences">
                        <div>
                          <img src={coinsidences} alt="coinsidences" />
                        </div>
                        <div>
                          <AvForm className="filters-modal__form">
                            <SegmentImgLabel>At least one </SegmentImgLabel>
                            <AvInput
                              style={{ marginLeft: "8px", cursor: "pointer" }}
                              className="segment-input"
                              type="checkbox"
                              name="inOrOut"
                              trueValue="Yes, I'm in!"
                              falseValue="NOPE!"
                            />
                          </AvForm>
                        </div>
                      </div>
                    </div>
                  </ModalBody>
                </Modal>
              </div>
              <div className="filters__list" onClick={toggleModalIndustries}>
                <span className="filters__item">Industrires</span>
                <Modal
                  className="filters-modal__segment"
                  isOpen={modalIndustries}
                  toggle={toggleModalIndustries}
                >
                  <ModalBody>
                    <div className="filters-modal__body">
                      <div className="filters-modal__coinsidences">
                        <div>
                          <img src={coinsidences} alt="coinsidences" />
                        </div>
                        <div>
                          <AvForm className="filters-modal__form">
                            <SegmentImgLabel>At least one </SegmentImgLabel>
                            <AvInput
                              style={{ marginLeft: "8px", cursor: "pointer" }}
                              className="segment-input"
                              type="checkbox"
                              name="inOrOut"
                              trueValue="Yes, I'm in!"
                              falseValue="NOPE!"
                            />
                          </AvForm>
                        </div>
                      </div>
                    </div>
                  </ModalBody>
                </Modal>
              </div>
              <div className="filters__list" onClick={toggleModalTimeframes}>
                <span className="filters__item">Timeframes</span>
                <Modal
                  className="filters-modal__segment"
                  isOpen={modalTimeframes}
                  toggle={toggleModalTimeframes}
                >
                  <ModalBody>
                    <div className="filters-modal__body">
                      <div className="filters-modal__coinsidences">
                        <div>
                          <img src={coinsidences} alt="coinsidences" />
                        </div>
                        <div>
                          <AvForm className="filters-modal__form">
                            <SegmentImgLabel>At least one </SegmentImgLabel>
                            <AvInput
                              style={{ marginLeft: "8px", cursor: "pointer" }}
                              className="segment-input"
                              type="checkbox"
                              name="inOrOut"
                              trueValue="Yes, I'm in!"
                              falseValue="NOPE!"
                            />
                          </AvForm>
                        </div>
                      </div>
                    </div>
                  </ModalBody>
                </Modal>
              </div>
              <div className="filters__list" onClick={toggleModalSize}>
                <span className="filters__item">Size</span>
                <Modal
                  className="filters-modal__segment"
                  isOpen={modalSize}
                  toggle={toggleModalSize}
                >
                  <ModalBody>
                    <div className="filters-modal__body">
                      <div className="filters-modal__coinsidences">
                        <div>
                          <img src={coinsidences} alt="coinsidences" />
                        </div>
                        <div>
                          <AvForm className="filters-modal__form">
                            <SegmentImgLabel>At least one </SegmentImgLabel>
                            <AvInput
                              style={{ marginLeft: "8px", cursor: "pointer" }}
                              className="segment-input"
                              type="checkbox"
                              name="inOrOut"
                              trueValue="Yes, I'm in!"
                              falseValue="NOPE!"
                            />
                          </AvForm>
                        </div>
                      </div>
                    </div>
                  </ModalBody>
                </Modal>
              </div>
              <div className="filters__list" onClick={toggleModalRisks}>
                <span className="filters__item">Mode</span>
                <Modal
                  className="filters-modal__segment"
                  isOpen={modalRisks}
                  toggle={toggleModalRisks}
                >
                  <ModalBody>
                    <div className="filters-modal__body">
                      <div className="filters-modal__coinsidences">
                        <img src={coinsidences} alt="coinsidences" />
                        <SegmentImgLabel>At least one </SegmentImgLabel>

                        <AvForm className="filters-modal__form">
                          <AvInput
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                            className="segment-input"
                            type="checkbox"
                            name="inOrOut"
                            trueValue="Yes, I'm in!"
                            falseValue="NOPE!"
                          />
                        </AvForm>
                      </div>
                    </div>
                  </ModalBody>
                </Modal>
              </div>
              <div className="filters__list-sort">
                <span className="filters__item">Sort</span>
                <span className="filters__item">by ratings</span>
              </div>
            </div>
          </ModalBody>
          <ModalFooter className="filter-modal__footer">
            <div className="portfolio-footer">
              <button className="portfolio__btn">Apply</button>
            </div>
          </ModalFooter>
        </Modal>
      </div>
      <PortfolioPageNav />
      <div className="portfolio-card__container">
        <PortfolioCards />
        <div className="portfolio-footer">
          <button className="portfolio__btn">Show more</button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
