import "./CompanyRisk.css";
import React from "react";
import { Col, Row } from "reactstrap";
import styled from "styled-components";
import ProgressBar from "../../../UI/ProgressBar/ProgressBar";

const CompanyRiskContainer = styled.section`
  height: 14.5rem;
  flex-grow: 0;
  margin: 1.875rem 2.5rem 2.5rem 0.063rem;
  padding: 1.875rem 2.5rem 1rem;
  border-radius: 8px;
  background-color: #fff;
`;

const CompanyRisksTitle = styled.h4`
  font-family: ArticulatCF;
  font-size: 1.375rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000b20;
`;
const CompanyRisksSubTitle = styled.p`
  font-family: ArticulatCF;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000b20;
`;
const CompanyRisksDescription = styled.span`
  display: inline-block;
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
const CompanyRisksPercent = styled.span`
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
`;

const CompanyRiskDate = styled.p`
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

const CompanyRisk = () => {
  return (
    <CompanyRiskContainer className="CompanyRatings">
      <div>
        <CompanyRisksTitle>Risk & Return</CompanyRisksTitle>
        <CompanyRiskDate>As of 5/31/2021</CompanyRiskDate>
      </div>
      <div className="d-flex">
        <Row>
          <Col>
            <CompanyRisksSubTitle>Below the average</CompanyRisksSubTitle>
            <Col className="d-flex">
              <ProgressBar />
              <div className="">
                <CompanyRisksDescription>
                  Return of this Morningstar Category
                </CompanyRisksDescription>
                <CompanyRisksPercent>60%</CompanyRisksPercent>
              </div>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col>
            <CompanyRisksSubTitle>Below the average</CompanyRisksSubTitle>
            <Col className="d-flex justify-content-between">
              <ProgressBar />
              <div className="">
                <CompanyRisksDescription>
                  Return of this Morningstar Category
                </CompanyRisksDescription>
                <CompanyRisksPercent>60%</CompanyRisksPercent>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    </CompanyRiskContainer>
  );
};

export default CompanyRisk;
