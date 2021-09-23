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

const DetailsContainer = styled.div`
  width: 100%;
  /* height: 31.625rem; */
  flex-grow: 0;
  margin: 2.5rem 2.5rem 5rem 0;
  padding: 1.875rem 5.625rem 1.875rem 2.5rem;
  border-radius: 8px;
  background-color: #fff;
`;

interface Props {}

const Details = (props: Props) => {
  return (
    <DetailsContainer>
      <DetailsTitle>Details</DetailsTitle>
      <Row>
        <Col className="details__maincol pb-4" sm="6">
          <Col>Morningstar Category</Col>
          <Col>Large Value</Col>
        </Col>
        <Col className="details__maincol pb-4" sm="6">
          <Col>Total DIV</Col>
          <Col>$530.00</Col>
        </Col>
        <Col className="details__maincol pb-4" sm="6">
          <Col>Exp Ratio (Gross)</Col>
          <Row>
            <Col sm="6">0.63%</Col>
            <Col sm="6">9/29/2020</Col>
          </Row>
        </Col>
        <Col className="details__maincol pb-4" sm="6">
          <Col>Exp Ratio (Gross)</Col>
          <Row>
            <Col sm="6">0.63%</Col>
            <Col sm="6">9/29/2020</Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="details__maincol pb-4" sm="6">
          <Col>Morningstar Category</Col>
          <Col>Large Value</Col>
        </Col>
        <Col className="details__maincol pb-4" sm="6">
          <Col>Total DIV</Col>
          <Col>$530.00</Col>
        </Col>
        <Col className="details__maincol pb-4" sm="6">
          <Col>Exp Ratio (Gross)</Col>
          <Row>
            <Col sm="6">0.63%</Col>
            <Col sm="6">9/29/2020</Col>
          </Row>
        </Col>
        <Col className="details__maincol pb-4" sm="6">
          <Col>Exp Ratio (Gross)</Col>
          <Row>
            <Col sm="6">0.63%</Col>
            <Col sm="6">9/29/2020</Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="details__maincol pb-4" sm="6">
          <Col>Morningstar Category</Col>
          <Col>Large Value</Col>
        </Col>
        <Col className="details__maincol pb-4" sm="6">
          <Col>Total DIV</Col>
          <Col>$530.00</Col>
        </Col>
        <Col className="details__maincol pb-4" sm="6">
          <Col>Exp Ratio (Gross)</Col>
          <Row>
            <Col sm="6">0.63%</Col>
            <Col sm="6">9/29/2020</Col>
          </Row>
        </Col>
        <Col className="details__maincol pb-4" sm="6">
          <Col>Exp Ratio (Gross)</Col>
          <Row>
            <Col sm="6">0.63%</Col>
            <Col sm="6">9/29/2020</Col>
          </Row>
        </Col>
      </Row>
    </DetailsContainer>
  );
};

export default Details;
