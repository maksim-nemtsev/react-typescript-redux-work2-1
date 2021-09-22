import React from "react";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";

const DetailsTitle = styled.h4`
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

interface Props {}

const Details = (props: Props) => {
  return (
    <div>
      <DetailsTitle>Details</DetailsTitle>
      <Row>
        <Col sm="3">
          <Col>Morningstar Category</Col>
          <Col>Large Value</Col>
        </Col>
        <Col sm="3"></Col>
      </Row>
    </div>
  );
};

export default Details;
