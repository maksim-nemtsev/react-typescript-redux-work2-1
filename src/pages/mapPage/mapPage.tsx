import React, { useState } from "react";
import {
  Button,
  Col,
  DropdownItem,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import MapWrapper from "../../components/Map/MapWrapper";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import ButtonsYears from "../../components/UI/ButtonsYears/ButtonsYears";
import mobFilters from "../../assets/svg/map/mob-filters.svg";
import "./mapPage.css";
import arrowBack from "../../assets/svg/card-page/arrow-left.svg";
import { AvForm, AvGroup, AvInput } from "availity-reactstrap-validation";
import RangeSlider from "react-bootstrap-range-slider";
import styled from "styled-components";
import aj from "../../assets/svg/country/aj.svg";
import brs from "../../assets/svg/country/brs.svg";
import england from "../../assets/svg/country/england.svg";
import eston from "../../assets/svg/country/eston.svg";
import grec from "../../assets/svg/country/grec.svg";
import ital from "../../assets/svg/country/ital.svg";
import kongo from "../../assets/svg/country/kongo.svg";
import par from "../../assets/svg/country/par.svg";
import seneg from "../../assets/svg/country/seneg.svg";
import coincidences from "../../assets/svg/mobile/coincidences.svg";

const RiskslioDropFormBtnGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const DropDownImgLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type Props = {
  userTarrifId: number;
};
const MapPage = (props: Props) => {
  const [modal, setModal] = useState(false);
  const [timeFrames, setTimeFrames] = useState(false);
  const [countriesAndRegions, setCountriesAndRegions] = useState(false);
  const [range, setRange] = useState(false);
  const [value1, setValue1] = useState<number | string>(0);
  const [value2, setValue2] = useState<number | string>(50);

  const toggleModal = () => setModal(!modal);
  const toggleTimeFrames = () => setTimeFrames(!timeFrames);
  const toggleCountriesAndRegions = () =>
    setCountriesAndRegions(!countriesAndRegions);
  const toggleRange = () => setRange(!range);

  return (
    <div className="map-page">
      <NavigationMenu userTarrifId={props.userTarrifId} />
      <div className="d-none d-lg-block">
        <h2 className="map__title">MAP</h2>
      </div>
      <div className="map-page__wrapper-top">
        <div>
          <h2 className="map__title">MAP</h2>
        </div>
        <div className="map-mob-filters" onClick={toggleModal}>
          <img src={mobFilters} alt="filters" />
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
              <div className="filters__country">
                <span className="filters__item" onClick={toggleTimeFrames}>
                  Таймфрейм
                </span>
                <span className="filters__item-count">10Y</span>
              </div>
              <Modal
                className="filters__time-frames"
                isOpen={timeFrames}
                toggle={toggleTimeFrames}
              >
                <ModalBody>
                  <AvForm className="drop-down__form">
                    <AvGroup
                      className="form-check p-2 d-flex justify-content-between"
                      check
                    >
                      <DropDownImgLabel>
                        <label className="drop-name portfolio">Day</label>
                      </DropDownImgLabel>

                      <AvInput
                        style={{ marginLeft: "8px", cursor: "pointer" }}
                        className="drop-input"
                        type="checkbox"
                        name="inOrOut"
                        trueValue="Yes, I'm in!"
                        falseValue="NOPE!"
                      />
                    </AvGroup>
                    <AvGroup
                      className="form-check p-2 d-flex justify-content-between"
                      check
                    >
                      <DropDownImgLabel>
                        <label className="drop-name portfolio">Week</label>
                      </DropDownImgLabel>

                      <AvInput
                        style={{ marginLeft: "8px", cursor: "pointer" }}
                        className="drop-input"
                        type="checkbox"
                        name="inOrOut"
                        trueValue="Yes, I'm in!"
                        falseValue="NOPE!"
                      />
                    </AvGroup>
                    <AvGroup
                      className="form-check p-2 d-flex justify-content-between"
                      check
                    >
                      <DropDownImgLabel>
                        <label className="drop-name portfolio">Month</label>
                      </DropDownImgLabel>

                      <AvInput
                        style={{ marginLeft: "8px", cursor: "pointer" }}
                        className="drop-input"
                        type="checkbox"
                        name="inOrOut"
                        trueValue="Yes, I'm in!"
                        falseValue="NOPE!"
                      />
                    </AvGroup>
                    <AvGroup
                      className="form-check p-2 d-flex justify-content-between"
                      check
                    >
                      <DropDownImgLabel>
                        <label className="drop-name portfolio">Year</label>
                      </DropDownImgLabel>

                      <AvInput
                        style={{ marginLeft: "8px", cursor: "pointer" }}
                        className="drop-input"
                        type="checkbox"
                        name="inOrOut"
                        trueValue="Yes, I'm in!"
                        falseValue="NOPE!"
                      />
                    </AvGroup>
                    <AvGroup
                      className="form-check p-2 d-flex justify-content-between"
                      check
                    >
                      <DropDownImgLabel>
                        <label className="drop-name portfolio">3 Year</label>
                      </DropDownImgLabel>

                      <AvInput
                        style={{ marginLeft: "8px", cursor: "pointer" }}
                        className="drop-input"
                        type="checkbox"
                        name="inOrOut"
                        trueValue="Yes, I'm in!"
                        falseValue="NOPE!"
                      />
                    </AvGroup>
                    <AvGroup
                      className="form-check p-2 d-flex justify-content-between"
                      check
                    >
                      <DropDownImgLabel>
                        <label className="drop-name portfolio">5 Year</label>
                      </DropDownImgLabel>

                      <AvInput
                        style={{ marginLeft: "8px", cursor: "pointer" }}
                        className="drop-input"
                        type="checkbox"
                        name="inOrOut"
                        trueValue="Yes, I'm in!"
                        falseValue="NOPE!"
                      />
                    </AvGroup>
                    <AvGroup
                      className="form-check p-2 d-flex justify-content-between"
                      check
                    >
                      <DropDownImgLabel>
                        <label className="drop-name portfolio">10 Year</label>
                      </DropDownImgLabel>

                      <AvInput
                        style={{ marginLeft: "8px", cursor: "pointer" }}
                        className="drop-input"
                        type="checkbox"
                        name="inOrOut"
                        trueValue="Yes, I'm in!"
                        falseValue="NOPE!"
                      />
                    </AvGroup>
                    <DropdownItem divider />
                    <FormGroup>
                      <RiskslioDropFormBtnGroup>
                        <Button
                          onClick={toggleTimeFrames}
                          className="btn portfolio-segment__btn"
                          color="link"
                        >
                          Cancel
                        </Button>
                        <Button
                          className="btn portfolio-segment__btn"
                          color="link"
                        >
                          Add
                        </Button>
                      </RiskslioDropFormBtnGroup>
                    </FormGroup>
                  </AvForm>
                </ModalBody>
              </Modal>
              <div className="filters__country">
                <span
                  className="filters__item"
                  onClick={toggleCountriesAndRegions}
                >
                  Countries and Regions
                </span>
                <Modal
                  className="filters__time-frames"
                  isOpen={countriesAndRegions}
                  toggle={toggleCountriesAndRegions}
                >
                  <ModalBody>
                    <AvForm className="drop-down__form">
                      <Input
                        placeholder="search"
                        id="drop-down__country-input"
                        className="drop-down__country-input filters"
                      />
                      <div className="drop-down__overflow filters">
                        <AvGroup
                          className="form-check p-2 d-flex justify-content-between  align-items-center"
                          check
                        >
                          <div className="d-flex justify-content-between">
                            <img src={coincidences} alt="" />
                            <DropDownImgLabel>
                              <label className="drop-name portfolio m-3">
                                At least one match
                              </label>
                            </DropDownImgLabel>
                          </div>
                          <AvInput
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                            className="drop-input"
                            type="checkbox"
                            name="inOrOut"
                            trueValue="Yes, I'm in!"
                            falseValue="NOPE!"
                          />
                        </AvGroup>
                        <AvGroup
                          className="form-check p-2 d-flex justify-content-between align-items-center"
                          check
                        >
                          <div className="d-flex justify-content-between">
                            <img src={brs} alt="" />
                            <DropDownImgLabel>
                              <label className="drop-name portfolio m-3">
                                Country
                              </label>
                            </DropDownImgLabel>
                          </div>

                          <AvInput
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                            className="drop-input"
                            type="checkbox"
                            name="inOrOut"
                            trueValue="Yes, I'm in!"
                            falseValue="NOPE!"
                          />
                        </AvGroup>
                        <AvGroup
                          className="form-check p-2 d-flex justify-content-between align-items-center"
                          check
                        >
                          <div className="d-flex justify-content-between">
                            <img src={england} alt="" />
                            <DropDownImgLabel>
                              <label className="drop-name portfolio m-3">
                                Country
                              </label>
                            </DropDownImgLabel>
                          </div>

                          <AvInput
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                            className="drop-input"
                            type="checkbox"
                            name="inOrOut"
                            trueValue="Yes, I'm in!"
                            falseValue="NOPE!"
                          />
                        </AvGroup>
                        <AvGroup
                          className="form-check p-2 d-flex justify-content-between align-items-center"
                          check
                        >
                          <div className="d-flex justify-content-between">
                            <img src={eston} alt="" />
                            <DropDownImgLabel>
                              <label className="drop-name portfolio m-3">
                                Country
                              </label>
                            </DropDownImgLabel>
                          </div>

                          <AvInput
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                            className="drop-input"
                            type="checkbox"
                            name="inOrOut"
                            trueValue="Yes, I'm in!"
                            falseValue="NOPE!"
                          />
                        </AvGroup>
                        <AvGroup
                          className="form-check p-2 d-flex justify-content-between align-items-center"
                          check
                        >
                          <div className="d-flex justify-content-between">
                            <img src={grec} alt="" />
                            <DropDownImgLabel>
                              <label className="drop-name portfolio m-3">
                                Country
                              </label>
                            </DropDownImgLabel>
                          </div>

                          <AvInput
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                            className="drop-input"
                            type="checkbox"
                            name="inOrOut"
                            trueValue="Yes, I'm in!"
                            falseValue="NOPE!"
                          />
                        </AvGroup>
                        <AvGroup
                          className="form-check p-2 d-flex justify-content-between align-items-center"
                          check
                        >
                          <div className="d-flex justify-content-between">
                            <img src={ital} alt="" />
                            <DropDownImgLabel>
                              <label className="drop-name portfolio m-3">
                                Country
                              </label>
                            </DropDownImgLabel>
                          </div>

                          <AvInput
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                            className="drop-input"
                            type="checkbox"
                            name="inOrOut"
                            trueValue="Yes, I'm in!"
                            falseValue="NOPE!"
                          />
                        </AvGroup>
                        <AvGroup
                          className="form-check p-2 d-flex justify-content-between align-items-center"
                          check
                        >
                          <div className="d-flex justify-content-between">
                            <img src={kongo} alt="" />
                            <DropDownImgLabel>
                              <label className="drop-name portfolio m-3">
                                Country
                              </label>
                            </DropDownImgLabel>
                          </div>

                          <AvInput
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                            className="drop-input"
                            type="checkbox"
                            name="inOrOut"
                            trueValue="Yes, I'm in!"
                            falseValue="NOPE!"
                          />
                        </AvGroup>
                        <AvGroup
                          className="form-check p-2 d-flex justify-content-between align-items-center"
                          check
                        >
                          <div className="d-flex justify-content-between">
                            <img src={par} alt="" />
                            <DropDownImgLabel>
                              <label className="drop-name portfolio m-3">
                                Country
                              </label>
                            </DropDownImgLabel>
                          </div>

                          <AvInput
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                            className="drop-input"
                            type="checkbox"
                            name="inOrOut"
                            trueValue="Yes, I'm in!"
                            falseValue="NOPE!"
                          />
                        </AvGroup>
                        <AvGroup
                          className="form-check p-2 d-flex justify-content-between align-items-center"
                          check
                        >
                          <div className="d-flex justify-content-between">
                            <img src={seneg} alt="" />
                            <DropDownImgLabel>
                              <label className="drop-name portfolio m-3">
                                Country
                              </label>
                            </DropDownImgLabel>
                          </div>

                          <AvInput
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                            className="drop-input"
                            type="checkbox"
                            name="inOrOut"
                            trueValue="Yes, I'm in!"
                            falseValue="NOPE!"
                          />
                        </AvGroup>
                        <AvGroup
                          className="form-check p-2 d-flex justify-content-between align-items-center"
                          check
                        >
                          <div className="d-flex justify-content-between">
                            <img src={aj} alt="" />
                            <DropDownImgLabel>
                              <label className="drop-name portfolio m-3">
                                Country
                              </label>
                            </DropDownImgLabel>
                          </div>

                          <AvInput
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                            className="drop-input"
                            type="checkbox"
                            name="inOrOut"
                            trueValue="Yes, I'm in!"
                            falseValue="NOPE!"
                          />
                        </AvGroup>
                        <AvGroup
                          className="form-check p-2 d-flex justify-content-between align-items-center"
                          check
                        >
                          <div className="d-flex justify-content-between">
                            <img src={aj} alt="" />
                            <DropDownImgLabel>
                              <label className="drop-name portfolio m-3">
                                Country
                              </label>
                            </DropDownImgLabel>
                          </div>

                          <AvInput
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                            className="drop-input"
                            type="checkbox"
                            name="inOrOut"
                            trueValue="Yes, I'm in!"
                            falseValue="NOPE!"
                          />
                        </AvGroup>
                        <AvGroup
                          className="form-check p-2 d-flex justify-content-between align-items-center"
                          check
                        >
                          <div className="d-flex justify-content-between">
                            <img src={aj} alt="" />
                            <DropDownImgLabel>
                              <label className="drop-name portfolio m-3">
                                Country
                              </label>
                            </DropDownImgLabel>
                          </div>

                          <AvInput
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                            className="drop-input"
                            type="checkbox"
                            name="inOrOut"
                            trueValue="Yes, I'm in!"
                            falseValue="NOPE!"
                          />
                        </AvGroup>
                        <AvGroup
                          className="form-check p-2 d-flex justify-content-between align-items-center"
                          check
                        >
                          <div className="d-flex justify-content-between">
                            <img src={aj} alt="" />
                            <DropDownImgLabel>
                              <label className="drop-name portfolio m-3">
                                Country
                              </label>
                            </DropDownImgLabel>
                          </div>

                          <AvInput
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                            className="drop-input"
                            type="checkbox"
                            name="inOrOut"
                            trueValue="Yes, I'm in!"
                            falseValue="NOPE!"
                          />
                        </AvGroup>
                        <AvGroup
                          className="form-check p-2 d-flex justify-content-between align-items-center"
                          check
                        >
                          <div className="d-flex justify-content-between">
                            <img src={aj} alt="" />
                            <DropDownImgLabel>
                              <label className="drop-name portfolio m-3">
                                Country
                              </label>
                            </DropDownImgLabel>
                          </div>

                          <AvInput
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                            className="drop-input"
                            type="checkbox"
                            name="inOrOut"
                            trueValue="Yes, I'm in!"
                            falseValue="NOPE!"
                          />
                        </AvGroup>
                        <AvGroup
                          className="form-check p-2 d-flex justify-content-between align-items-center"
                          check
                        >
                          <div className="d-flex justify-content-between">
                            <img src={aj} alt="" />
                            <DropDownImgLabel>
                              <label className="drop-name portfolio m-3">
                                Country
                              </label>
                            </DropDownImgLabel>
                          </div>

                          <AvInput
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                            className="drop-input"
                            type="checkbox"
                            name="inOrOut"
                            trueValue="Yes, I'm in!"
                            falseValue="NOPE!"
                          />
                        </AvGroup>
                        <AvGroup
                          className="form-check p-2 d-flex justify-content-between align-items-center"
                          check
                        >
                          <div className="d-flex justify-content-between">
                            <img src={aj} alt="" />
                            <DropDownImgLabel>
                              <label className="drop-name portfolio m-3">
                                Country
                              </label>
                            </DropDownImgLabel>
                          </div>

                          <AvInput
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                            className="drop-input"
                            type="checkbox"
                            name="inOrOut"
                            trueValue="Yes, I'm in!"
                            falseValue="NOPE!"
                          />
                        </AvGroup>
                        <AvGroup
                          className="form-check p-2 d-flex justify-content-between align-items-center"
                          check
                        >
                          <div className="d-flex justify-content-between">
                            <img src={aj} alt="" />
                            <DropDownImgLabel>
                              <label className="drop-name portfolio m-3">
                                Country
                              </label>
                            </DropDownImgLabel>
                          </div>

                          <AvInput
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                            className="drop-input"
                            type="checkbox"
                            name="inOrOut"
                            trueValue="Yes, I'm in!"
                            falseValue="NOPE!"
                          />
                        </AvGroup>
                        <AvGroup
                          className="form-check p-2 d-flex justify-content-between align-items-center"
                          check
                        >
                          <div className="d-flex justify-content-between">
                            <img src={aj} alt="" />
                            <DropDownImgLabel>
                              <label className="drop-name portfolio m-3">
                                Country
                              </label>
                            </DropDownImgLabel>
                          </div>

                          <AvInput
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                            className="drop-input"
                            type="checkbox"
                            name="inOrOut"
                            trueValue="Yes, I'm in!"
                            falseValue="NOPE!"
                          />
                        </AvGroup>
                        <AvGroup
                          className="form-check p-2 d-flex justify-content-between align-items-center"
                          check
                        >
                          <div className="d-flex justify-content-between">
                            <img src={aj} alt="" />
                            <DropDownImgLabel>
                              <label className="drop-name portfolio m-3">
                                Country
                              </label>
                            </DropDownImgLabel>
                          </div>

                          <AvInput
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                            className="drop-input"
                            type="checkbox"
                            name="inOrOut"
                            trueValue="Yes, I'm in!"
                            falseValue="NOPE!"
                          />
                        </AvGroup>
                        <AvGroup
                          className="form-check p-2 d-flex justify-content-between align-items-center"
                          check
                        >
                          <div className="d-flex justify-content-between">
                            <img src={aj} alt="" />
                            <DropDownImgLabel>
                              <label className="drop-name portfolio m-3">
                                Country
                              </label>
                            </DropDownImgLabel>
                          </div>

                          <AvInput
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                            className="drop-input"
                            type="checkbox"
                            name="inOrOut"
                            trueValue="Yes, I'm in!"
                            falseValue="NOPE!"
                          />
                        </AvGroup>
                        <AvGroup
                          className="form-check p-2 d-flex justify-content-between align-items-center"
                          check
                        >
                          <div className="d-flex justify-content-between">
                            <img src={aj} alt="" />
                            <DropDownImgLabel>
                              <label className="drop-name portfolio m-3">
                                Country
                              </label>
                            </DropDownImgLabel>
                          </div>

                          <AvInput
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                            className="drop-input"
                            type="checkbox"
                            name="inOrOut"
                            trueValue="Yes, I'm in!"
                            falseValue="NOPE!"
                          />
                        </AvGroup>
                        <AvGroup
                          className="form-check p-2 d-flex justify-content-between align-items-center"
                          check
                        >
                          <div className="d-flex justify-content-between">
                            <img src={aj} alt="" />
                            <DropDownImgLabel>
                              <label className="drop-name portfolio m-3">
                                Country
                              </label>
                            </DropDownImgLabel>
                          </div>

                          <AvInput
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                            className="drop-input"
                            type="checkbox"
                            name="inOrOut"
                            trueValue="Yes, I'm in!"
                            falseValue="NOPE!"
                          />
                        </AvGroup>
                      </div>
                      <DropdownItem divider />
                      <FormGroup>
                        <RiskslioDropFormBtnGroup>
                          <Button
                            className="btn portfolio-segment__btn"
                            color="link"
                            onClick={toggleCountriesAndRegions}
                          >
                            Cancel
                          </Button>
                          <Button
                            className="btn portfolio-segment__btn"
                            color="link"
                          >
                            Add
                          </Button>
                        </RiskslioDropFormBtnGroup>
                      </FormGroup>
                    </AvForm>
                  </ModalBody>
                </Modal>
                <span className="filters__item-count">101</span>
              </div>
              <div className="filters__country">
                <span className="filters__item" onClick={toggleRange}>
                  Range
                </span>
                <Modal
                  className="filters__time-frames"
                  isOpen={range}
                  toggle={toggleRange}
                >
                  <ModalBody>
                    <AvForm className="drop-down__form">
                      <AvGroup className="form-check p-0" check>
                        <RangeSlider
                          value={value1}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setValue1(e.target.value)
                          }
                          min={0}
                          max={49}
                        />
                        <RangeSlider
                          value={value2}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setValue2(e.target.value)
                          }
                          min={50}
                          max={100}
                        />
                      </AvGroup>
                      <DropdownItem divider />
                      <FormGroup>
                        <RiskslioDropFormBtnGroup>
                          <Button
                            className="btn portfolio-segment__btn"
                            color="link"
                          >
                            Cancel
                          </Button>
                          <Button
                            className="btn portfolio-segment__btn"
                            color="link"
                          >
                            Add
                          </Button>
                        </RiskslioDropFormBtnGroup>
                      </FormGroup>
                    </AvForm>
                  </ModalBody>
                </Modal>
                <span className="filters__item-count">10-100</span>
              </div>
            </div>
          </ModalBody>
          <ModalFooter className="filters">
            <Button className="filters-btn" onClick={toggleModal}>
              Apply
            </Button>
          </ModalFooter>
        </Modal>
      </div>

      <div className="d-none d-lg-block">
        <Col sm={{ size: 4, order: 2, offset: 9 }}>
          <ButtonsYears />
        </Col>
      </div>
      <MapWrapper displayMode={true} />
    </div>
  );
};

export default MapPage;
