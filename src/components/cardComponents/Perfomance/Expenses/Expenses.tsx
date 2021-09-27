import "./Expenses.css";
import React from "react";
import { Col, DropdownItem, Row } from "reactstrap";
import styled from "styled-components";

const ExpensesTitle = styled.h4`
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
const ExpensesSubTitle = styled.h4`
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
const ExpensesDescription = styled.h4`
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

const ExpensesContainer = styled.div`
  width: 100%;
  height: 32.625rem;
  flex-grow: 0;
  margin: 2.5rem 2.5rem 5rem 0;
  padding: 1.875rem 0 2.5rem 2.1rem;
  border-radius: 8px;
  background-color: #fff;
`;

const Expenses = () => {
  return (
    <ExpensesContainer>
      <Row>
        <Col>
          <ExpensesTitle>Expenses</ExpensesTitle>
        </Col>
      </Row>
      <Row>
        <Row className="d-flex justify-content-between">
          <Col className="mb-5" sm="7">
            <ExpensesSubTitle className="m-3">9/29/2020</ExpensesSubTitle>
            <ExpensesDescription>Exp Ratio (Gross)</ExpensesDescription>
          </Col>

          <Col className="mb-5" sm="5">
            <ExpensesSubTitle className="m-3">9/29/2020</ExpensesSubTitle>
            <ExpensesDescription>Exp Ratio (Net)</ExpensesDescription>
          </Col>
        </Row>
        <DropdownItem divider />
        <Row className="d-flex justify-content-between">
          <Col className="mb-5" sm="7">
            <ExpensesSubTitle className="m-3">Expenses</ExpensesSubTitle>
            <ExpensesDescription>Exp Ratio (Net)</ExpensesDescription>
          </Col>
          <Col className="mb-5" sm="5">
            <ExpensesSubTitle className="m-3">9/29/2020</ExpensesSubTitle>
            <ExpensesDescription>Exp Ratio (Net)</ExpensesDescription>
          </Col>
        </Row>
        <DropdownItem divider />
        <Row className="d-flex justify-content-between">
          <Col className="mb-5" sm="7">
            <ExpensesSubTitle className="m-3">Expenses</ExpensesSubTitle>
            <ExpensesDescription>Exp Ratio (Net)</ExpensesDescription>
          </Col>
          <Col className="mb-5" sm="5">
            <ExpensesSubTitle className="m-3">9/29/2020</ExpensesSubTitle>
            <ExpensesDescription>Exp Ratio (Net)</ExpensesDescription>
          </Col>
        </Row>
      </Row>
    </ExpensesContainer>
  );
};

export default Expenses;
