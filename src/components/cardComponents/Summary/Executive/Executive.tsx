import React from "react";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import HighchartsPolar from "../../../HighchartsComponents/HighchartsPolar";
import "./Executive.css";

const ExecutiveTitle = styled.h4`
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

const ExecutiveSubTitle = styled.p`
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

const Executive = () => {
  return (
    <Container className="Executive">
      <ExecutiveTitle>Executive Summary</ExecutiveTitle>
      <ExecutiveSubTitle>123 Companies</ExecutiveSubTitle>
      <Row>
        <Col>
          <HighchartsPolar />
        </Col>
      </Row>
    </Container>
  );
};

export default Executive;
