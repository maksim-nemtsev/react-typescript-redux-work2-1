import "./CompanyRatings.css";
import React, { useState } from "react";
import { Col, Row, TabContent, TabPane } from "reactstrap";
import styled from "styled-components";
import { DinamicArrowDown } from "../../../UI/DynamicArrows/DynamicArrows";
import StarGrey from "../../../../assets/svg/card-page/star-grey.svg";

const CopanyRatingsContainer = styled.section`
  height: 14.5rem;
  flex-grow: 0;
  margin: 1.875rem 2.5rem 2.5rem 0.063rem;
  padding: 1.875rem 2.5rem 1rem;
  border-radius: 8px;
  background-color: #fff;
`;

const CompanyRatingsTitle = styled.h4`
  font-family: ArticulatCF;
  font-size: 1.375rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000b20;
`;

const CompanyRatingsDate = styled.p`
  font-family: ArticulatCF;
  font-size: 0.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  text-align: end;
  letter-spacing: normal;
  color: #9faab3;
`;

const CompanyRatingsYear = styled.p`
  font-family: ArticulatCF;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #9faab3;
`;

const CompanyRatingsStar = styled.span`
  display: inline-block;
  font-family: ArticulatCF;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000b20;
  margin-right: 0.5rem;
`;

const CompanyRatingsNav = styled.nav``;

const CompanyRatingsListItem = styled.li`
  display: inline-block;
  font-family: ArticulatCF;
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #9faab3;
  cursor: pointer;
  margin-right: 0.75rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  &:hover {
    color: #000b20;
  }
  &:hover::before {
    position: absolute;
    display: inline-block;
    content: "";
    width: 40px;
    height: 2px;
    margin-top: 1.5rem;
    border-radius: 2px;
    background-color: #5448c8;
  }
`;
const TabDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const CompanyRatings = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <CopanyRatingsContainer className="CompanyRatings">
      <div>
        <CompanyRatingsTitle>Ratings</CompanyRatingsTitle>
        <CompanyRatingsDate>As of 5/31/2021</CompanyRatingsDate>
      </div>
      <CompanyRatingsNav>
        <CompanyRatingsListItem
          onClick={() => {
            toggle("1");
          }}
        >
          Morningstar
        </CompanyRatingsListItem>
        <CompanyRatingsListItem
          onClick={() => {
            toggle("2");
          }}
        >
          Lipper
        </CompanyRatingsListItem>
        <CompanyRatingsListItem
          onClick={() => {
            toggle("3");
          }}
        >
          s&p
        </CompanyRatingsListItem>
        <CompanyRatingsListItem
          onClick={() => {
            toggle("4");
          }}
        >
          Moody’s
        </CompanyRatingsListItem>
      </CompanyRatingsNav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <TabDiv>
            <div className="d-flex">
              <div className="d-flex m-2">
                <DinamicArrowDown />
              </div>
              <Col sm="2">
                <div>
                  <CompanyRatingsYear>3 Yrs</CompanyRatingsYear>
                </div>
                <Col className="d-flex align-center">
                  <CompanyRatingsStar>3.4</CompanyRatingsStar>
                  <img src={StarGrey} alt="" />
                </Col>
              </Col>
            </div>
            <div className="d-flex">
              <div className="d-flex m-2">
                <DinamicArrowDown />
              </div>
              <Col sm="2">
                <Col>
                  <CompanyRatingsYear>3 Yrs</CompanyRatingsYear>
                </Col>
                <Col className="d-flex align-center">
                  <CompanyRatingsStar>3.4</CompanyRatingsStar>
                  <img src={StarGrey} alt="" />
                </Col>
              </Col>
            </div>

            <div className="d-flex">
              <div className="d-flex m-2">
                <DinamicArrowDown />
              </div>
              <Col sm="2">
                <Col>
                  <CompanyRatingsYear>3 Yrs</CompanyRatingsYear>
                </Col>
                <Col className="d-flex align-center">
                  <CompanyRatingsStar>3.4</CompanyRatingsStar>
                  <img src={StarGrey} alt="" />
                </Col>
              </Col>
            </div>
          </TabDiv>
        </TabPane>
        <TabPane tabId="2">
          <Row></Row>
        </TabPane>
        <TabPane tabId="3">
          <Row></Row>
        </TabPane>
        <TabPane tabId="4">
          <Row></Row>
        </TabPane>
      </TabContent>
    </CopanyRatingsContainer>
  );
};

export default CompanyRatings;
