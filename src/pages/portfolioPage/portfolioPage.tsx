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
import aj from "../../assets/svg/country/aj.svg";
import brs from "../../assets/svg/country/brs.svg";
import eng from "../../assets/svg/country/england.svg";
import est from "../../assets/svg/country/eston.svg";
import grec from "../../assets/svg/country/grec.svg";
import ital from "../../assets/svg/country/ital.svg";
import kongo from "../../assets/svg/country/kongo.svg";
import par from "../../assets/svg/country/par.svg";
import seneg from "../../assets/svg/country/seneg.svg";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { AvForm, AvInput } from "availity-reactstrap-validation";
import MultiSlider from "../../components/UI/MultiSlider/MultiSlider";
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
  const [modalSort, setModalSort] = useState(false);

  const toggleModal = () => setModal(!modal);
  const toggleModalSegment = () => setModalSegment(!modalSegment);
  const toggleModalCountries = () => setModalCountries(!modalCountries);
  const toggleModalIndustries = () => setModalIndustries(!modalIndustries);
  const toggleModalTimeframes = () => setModalTimeframes(!modalTimeframes);
  const toggleModalSize = () => setModalSize(!modalSize);
  const toggleModalRisks = () => setModalRisks(!modalRisks);
  const toggleModalSort = () => setModalSort(!modalSort);

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
                      <span onClick={toggleModalSegment} className="btn">
                        Сбросить
                      </span>
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
                  <ModalHeader className="modal-header">
                    <input
                      type="text"
                      className="Search"
                      placeholder="Search"
                    />
                  </ModalHeader>
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
                            src={aj}
                            alt="coinsidences"
                          />
                          <SegmentImgLabel>Грузия</SegmentImgLabel>
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
                            src={ital}
                            alt="coinsidences"
                          />
                          <SegmentImgLabel>ДР Конго</SegmentImgLabel>
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
                            src={grec}
                            alt="coinsidences"
                          />
                          <SegmentImgLabel>Эстония</SegmentImgLabel>
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
                            src={kongo}
                            alt="coinsidences"
                          />
                          <SegmentImgLabel>Эстония</SegmentImgLabel>
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
                            src={brs}
                            alt="coinsidences"
                          />
                          <SegmentImgLabel>Эстония</SegmentImgLabel>
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
                            src={eng}
                            alt="coinsidences"
                          />
                          <SegmentImgLabel>Эстония</SegmentImgLabel>
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
                            src={par}
                            alt="coinsidences"
                          />
                          <SegmentImgLabel>Эстония</SegmentImgLabel>
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
                            src={seneg}
                            alt="coinsidences"
                          />
                          <SegmentImgLabel>Эстония</SegmentImgLabel>
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
                            src={est}
                            alt="coinsidences"
                          />
                          <SegmentImgLabel>Эстония</SegmentImgLabel>
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
                          <SegmentImgLabel>Эстония</SegmentImgLabel>
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
                          <SegmentImgLabel>Эстония</SegmentImgLabel>
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
                          <SegmentImgLabel>Эстония</SegmentImgLabel>
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
                          <SegmentImgLabel>Эстония</SegmentImgLabel>
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
                          <SegmentImgLabel>Эстония</SegmentImgLabel>
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
                      <span onClick={toggleModalCountries} className="btn">
                        Сбросить
                      </span>
                      <span className="btn">Применить</span>
                    </div>
                  </ModalFooter>
                </Modal>
              </div>
              <div className="filters__list" onClick={toggleModalIndustries}>
                <span className="filters__item">Industrires</span>
                <Modal
                  className="filters-modal__segment"
                  isOpen={modalIndustries}
                  toggle={toggleModalIndustries}
                >
                  <ModalHeader className="modal-header">
                    <input
                      type="text"
                      className="Search"
                      placeholder="Search"
                    />
                  </ModalHeader>
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
                          <SegmentImgLabel>Segment</SegmentImgLabel>
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
                          <SegmentImgLabel>Segment</SegmentImgLabel>
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
                          <SegmentImgLabel>Segment</SegmentImgLabel>
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
                          <SegmentImgLabel>Segment</SegmentImgLabel>
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
                          <SegmentImgLabel>Segment</SegmentImgLabel>
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
                          <SegmentImgLabel>Segment</SegmentImgLabel>
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
                          <SegmentImgLabel>Segment</SegmentImgLabel>
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
                      <span onClick={toggleModalIndustries} className="btn">
                        Сбросить
                      </span>
                      <span className="btn">Применить</span>
                    </div>
                  </ModalFooter>
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
                      <div className="filters-modal__timeframes">
                        <div className="d-flex">
                          <img
                            className="coinsidences"
                            src={growth}
                            alt="coinsidences"
                          />
                          <SegmentImgLabel>Day</SegmentImgLabel>
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
                      <div className="filters-modal__timeframes">
                        <div className="d-flex">
                          <img
                            className="coinsidences"
                            src={growth}
                            alt="coinsidences"
                          />
                          <SegmentImgLabel>Week</SegmentImgLabel>
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
                      <div className="filters-modal__timeframes">
                        <div className="d-flex">
                          <img
                            className="coinsidences"
                            src={growth}
                            alt="coinsidences"
                          />
                          <SegmentImgLabel>Month</SegmentImgLabel>
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
                      <div className="filters-modal__timeframes">
                        <div className="d-flex">
                          <img
                            className="coinsidences"
                            src={growth}
                            alt="coinsidences"
                          />
                          <SegmentImgLabel>Year</SegmentImgLabel>
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
                      <div className="filters-modal__timeframes">
                        <div className="d-flex">
                          <img
                            className="coinsidences"
                            src={growth}
                            alt="coinsidences"
                          />
                          <SegmentImgLabel>3 Year</SegmentImgLabel>
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
                      <div className="filters-modal__timeframes">
                        <div className="d-flex">
                          <img
                            className="coinsidences"
                            src={growth}
                            alt="coinsidences"
                          />
                          <SegmentImgLabel>5 Year</SegmentImgLabel>
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
                      <div className="filters-modal__timeframes">
                        <div className="d-flex">
                          <img
                            className="coinsidences"
                            src={growth}
                            alt="coinsidences"
                          />
                          <SegmentImgLabel>10 Year</SegmentImgLabel>
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
                      <span onClick={toggleModalTimeframes} className="btn">
                        Сбросить
                      </span>
                      <span className="btn">Применить</span>
                    </div>
                  </ModalFooter>
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
                    <div className="filters-modal__body timeframes">
                      <div className="filters-modal__timeframes">
                        <div className="d-flex">
                          <img
                            className="coinsidences"
                            src={growth}
                            alt="coinsidences"
                          />
                          <SegmentImgLabel>Small</SegmentImgLabel>
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
                      <div className="filters-modal__timeframes">
                        <div className="d-flex">
                          <img
                            className="coinsidences"
                            src={growth}
                            alt="coinsidences"
                          />
                          <SegmentImgLabel>Middle</SegmentImgLabel>
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
                      <div className="filters-modal__timeframes">
                        <div className="d-flex">
                          <img
                            className="coinsidences"
                            src={growth}
                            alt="coinsidences"
                          />
                          <SegmentImgLabel>Big</SegmentImgLabel>
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
                      <span onClick={toggleModalSize} className="btn">
                        Сбросить
                      </span>
                      <span className="btn">Применить</span>
                    </div>
                  </ModalFooter>
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
                    <MultiSlider />
                  </ModalBody>
                </Modal>
              </div>
              <div className="filters__list-sort">
                <span className="filters__item" onClick={toggleModalSort}>
                  Sort
                </span>
                <Modal
                  className="filters-modal__segment"
                  isOpen={modalSort}
                  toggle={toggleModalSort}
                >
                  <ModalBody className="modal-sort">
                    <div className="sort">
                      <SegmentImgLabel>By rating</SegmentImgLabel>
                    </div>
                    <div className="sort">
                      <SegmentImgLabel>By segments</SegmentImgLabel>
                    </div>
                    <div className="sort">
                      <SegmentImgLabel>By industry</SegmentImgLabel>
                    </div>
                    <div className="sort">
                      <SegmentImgLabel>To size</SegmentImgLabel>
                    </div>
                  </ModalBody>
                </Modal>
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
