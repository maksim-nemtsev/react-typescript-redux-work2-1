import React from "react";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import AverageCol from "../../../HighchartsComponents/AverageCol";
import "./AverageAnnual.css";

const AverageAnnualTitle = styled.h4`
  display: inline-block;
  font-family: ArticulatCF;
  font-size: 1.375rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000b20;
  margin-bottom: 2.5rem;
`;

const AverageAnnualSubTitle = styled.p`
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

const AverageAnnual = () => {
  return (
    <Container className="Average">
      <AverageAnnualTitle>Average Annual Total Returns</AverageAnnualTitle>
      <AverageAnnualSubTitle>123 Companies</AverageAnnualSubTitle>
      <Row>
        <Col>
          <AverageCol />
        </Col>
      </Row>
    </Container>
  );
};

export default AverageAnnual;
