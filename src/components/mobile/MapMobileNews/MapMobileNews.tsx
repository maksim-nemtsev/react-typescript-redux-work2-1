import React from "react";
import "./MapMobileNews.css";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import styled from "styled-components";
import ButtonSettings from "../../UI/ButtonSettings/ButtonSettings";
import ButtonsToolbar from "../../UI/ButtonsToolbar/ButtonsToolbarBoottom";

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

const MapMobileNews = (props: {
  isMobileNewsClose: boolean;
  mobileNewsToggleHandler: () => void;
}) => {
  const { isMobileNewsClose, mobileNewsToggleHandler } = props;
  const externalSearchCloseBtn = (
    <button className="modal-search__close" onClick={mobileNewsToggleHandler}>
      &times;
    </button>
  );

  const monitoringListMocks = [
    {
      date: "08/05/2021",
      country: "Казахстан: ",
      branch: {
        0: "Разведка и добыча газа",
        1: "межотраслевые холдинги",
        3: "Коплексное страхование",
        4: "Диверсифицированные банки",
        5: "Сельскохозяйственная продукция",
      },
      branchCounts: {
        0: "(1,2d)d",
        1: "(-3.06)d",
        3: "(1,33)D",
        4: "(1,33)D",
        5: "(1,33)D",
      },
    },
    {
      date: "08/05/2021",
      country: "Болгария: ",
      branch: {
        0: "Разведка и добыча газа",
        1: "межотраслевые холдинги",
        3: "Коплексное страхование",
        4: "Диверсифицированные банки",
        5: "Сельскохозяйственная продукция",
      },
      branchCounts: {
        0: "(1,2d)d",
        1: "(-3.06)d",
        3: "(1,33)D",
        4: "(1,33)D",
        5: "(1,33)D",
      },
    },
    {
      date: "08/05/2021",
      country: "Болгария",
      branch: {
        0: "Разведка и добыча газа",
        1: "межотраслевые холдинги",
        3: "Коплексное страхование",
        4: "Диверсифицированные банки",
        5: "Сельскохозяйственная продукция",
      },
      branchCounts: {
        0: "(1,2d)d",
        1: "(-3.06)d",
        3: "(1,33)D",
        4: "(1,33)D",
        5: "(1,33)D",
      },
    },
    {
      date: "08/05/2021",
      country: "Болгария",
      branch: {
        0: "Разведка и добыча газа",
        1: "межотраслевые холдинги",
        3: "Коплексное страхование",
        4: "Диверсифицированные банки",
        5: "Сельскохозяйственная продукция",
      },
      branchCounts: {
        0: "(1,2d)d",
        1: "(-3.06)d",
        3: "(1,33)D",
        4: "(1,33)D",
        5: "(1,33)D",
      },
    },
    {
      date: "08/05/2021",
      country: "Болгария",
      branch: {
        0: "Разведка и добыча газа",
        1: "межотраслевые холдинги",
        3: "Коплексное страхование",
        4: "Диверсифицированные банки",
        5: "Сельскохозяйственная продукция",
      },
      branchCounts: {
        0: "(1,2d)d",
        1: "(-3.06)d",
        3: "(1,33)D",
        4: "(1,33)D",
        5: "(1,33)D",
      },
    },
    {
      date: "08/05/2021",
      country: "Болгария",
      branch: {
        0: "Разведка и добыча газа",
        1: "межотраслевые холдинги",
        3: "Коплексное страхование",
        4: "Диверсифицированные банки",
        5: "Сельскохозяйственная продукция",
      },
      branchCounts: {
        0: "(1,2d)d",
        1: "(-3.06)d",
        3: "(1,33)D",
        4: "(1,33)D",
        5: "(1,33)D",
      },
    },
  ];

  return (
    <div className="d-block d-lg-none">
      <Modal
        isOpen={isMobileNewsClose}
        toggle={mobileNewsToggleHandler}
        className="modal-search"
        external={externalSearchCloseBtn}
      >
        <ModalHeader className="modal-search__header">
          <ModalHeaderTitle>Monitoring</ModalHeaderTitle>
        </ModalHeader>
        <ModalBody className="mobile-news-body">
          {monitoringListMocks.map((el) => (
            <div className="mobile-news">
              <span className="mobile-news__title">{el.date}</span>
              <div className="mobile-news__content">
                <span className="mobile-news__country">{el.country}</span>
                <div className="d-flex justify-content-between">
                  <div>
                    <span className="mobile-news__branch">
                      {Object.values(el.branch).map((branch) => (
                        <div>
                          <span className="mobile-news-info">{branch}</span>
                        </div>
                      ))}
                    </span>
                  </div>
                  <div>
                    <span className="mobile-news__branch">
                      {Object.values(el.branchCounts).map((branch) => (
                        <div>
                          <span className="mobile-news-info">{branch}</span>
                        </div>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ModalBody>
        <ModalFooter className="map-mob-news__footer">
          <ButtonSettings />
          <ButtonsToolbar />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default MapMobileNews;
