import React from "react";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import AverageCol from "../../../HighchartsComponents/AverageCol";
import "./AverageAnnual.css";
import AverageColTable from "./AverageColTable/AverageColTable";

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

const AverageAnnualNav = styled.nav``;

const AverageAnnualListItem = styled.li`
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

interface Props {}

const AverageAnnual = (props: Props) => {
  return (
    <Container className="Average">
      <AverageAnnualTitle>Executive Summary</AverageAnnualTitle>
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
