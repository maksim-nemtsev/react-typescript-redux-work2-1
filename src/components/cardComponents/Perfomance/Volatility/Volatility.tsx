import "./Volatility.css";
import React from "react";
import { Col, Row } from "reactstrap";
import CardBasicArea from "../../../HighchartsComponents/CardBasicArea";
import styled from "styled-components";

const VolatilityContainer = styled.section`
  margin: 3.75rem 0;
  padding: 1.875rem 2.5rem;
  border-radius: 8px;
  background-color: #fff;
`;

const VolatilityTitle = styled.h4`
  display: inline-block;
  margin-bottom: 2.5rem;
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

const Volatility = () => {
  return (
    <VolatilityContainer>
      <VolatilityTitle>Volatility Measure</VolatilityTitle>
      <Row>
        <Col sm="3">
          <CardBasicArea />
        </Col>
        <Col sm="3">
          <CardBasicArea />
        </Col>
        <Col sm="3">
          <CardBasicArea />
        </Col>
        <Col sm="3">
          <CardBasicArea />
        </Col>
      </Row>
    </VolatilityContainer>
  );
};

export default Volatility;
