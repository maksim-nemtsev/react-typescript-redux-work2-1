import React from "react";
import { Col, Row } from "reactstrap";
import styled from "styled-components";

const FactsTitle = styled.h4`
  font-family: ArticulatCF;
  font-size: 1.375rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000b20;
`;

const FactsSubtitle = styled.p`
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

const FactsInfo = styled.span`
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

const FactsDate = styled.p`
  font-family: ArticulatCF;
  font-size: 0.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #9faab3;
`;

const FactsContainer = styled.div`
  width: 100%;
  margin: 2.5rem 2.5rem 5rem 0;
  padding: 1.875rem 5.625rem 1.875rem 2.5rem;
  border-radius: 8px;
  background-color: #fff;
`;

const Facts = () => {
  return (
    <FactsContainer>
      <FactsTitle>Facts</FactsTitle>
      <FactsDate>As of 5/31/2021</FactsDate>
      <Row>
        <Col className="pb-4" sm="3">
          <Col>
            <FactsSubtitle>Fiscal Year End</FactsSubtitle>
          </Col>
          <Col>
            <FactsInfo>July</FactsInfo>
          </Col>
        </Col>
        <Col className="pb-4" sm="3">
          <Col>
            <FactsSubtitle>Fund Symbol</FactsSubtitle>
          </Col>
          <Row>
            <Col>
              <FactsInfo>July</FactsInfo>
            </Col>
            <Col>
              <FactsInfo>July</FactsInfo>
            </Col>
          </Row>
        </Col>
        <Col className="pb-4" sm="3">
          <Col>
            <FactsSubtitle>Fiscal Year End</FactsSubtitle>
          </Col>
          <Col>
            <FactsInfo>July</FactsInfo>
          </Col>
        </Col>

        <Col className="pb-4" sm="3">
          <Col>
            <FactsSubtitle>Fiscal Year End</FactsSubtitle>
          </Col>
          <Col>
            <FactsInfo>July</FactsInfo>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col className="pb-4" sm="3">
          <Col>
            <FactsSubtitle>Fiscal Year End</FactsSubtitle>
          </Col>
          <Col>
            <FactsInfo>July</FactsInfo>
          </Col>
        </Col>
        <Col className="pb-4" sm="3">
          <Col>
            <FactsSubtitle>Fiscal Year End</FactsSubtitle>
          </Col>
          <Col>
            <FactsInfo>July</FactsInfo>
          </Col>
        </Col>
        <Col className="pb-4" sm="3">
          <Col>
            <FactsSubtitle>Fiscal Year End</FactsSubtitle>
          </Col>
          <Col>
            <FactsInfo>July</FactsInfo>
          </Col>
        </Col>
        <Col className="pb-4" sm="3">
          <Col>
            <FactsSubtitle>Fiscal Year End</FactsSubtitle>
          </Col>
          <Col>
            <FactsInfo>July</FactsInfo>
          </Col>
        </Col>
      </Row>
    </FactsContainer>
  );
};

export default Facts;
