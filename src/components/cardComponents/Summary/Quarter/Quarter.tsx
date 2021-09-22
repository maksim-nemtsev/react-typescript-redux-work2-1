import React from "react";
import { Col, Container, Row, Table } from "reactstrap";
import styled from "styled-components";
import "./Quarter.css";

const QuarterTitle = styled.h4`
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

const QuarterSubTitle = styled.p`
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

const QuarterNav = styled.nav``;

const QuarterListItem = styled.li`
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

const Quarter = (props: Props) => {
  return (
    <Container className="Executive">
      <QuarterTitle>Quarter-End Average Annual Total Returns</QuarterTitle>
      <QuarterSubTitle>
        As of 5/31/2021 | Fund Inception 6/17/2003 | Expense Ratio (Gross) 0.63%
        as of 9/29/2020
      </QuarterSubTitle>
      <Row>
        <Col>
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>YR</th>
                <th>3 YRS</th>
                <th>5 YRS</th>
                <th>10 YRS</th>
                <th>LIFE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Before Taxes</th>
                <td>41.62%</td>
                <td>8.72%</td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Fidelity® Blue Chip Value Fund</th>
                <td>41.62%</td>
                <td>8.72%</td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Russell 1000 Value</th>
                <td>41.62%</td>
                <td>8.72%</td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Large Value</th>
                <td>41.62%</td>
                <td>8.72%</td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Fidelity® Blue Chip Value Fund</th>
                <td>41.62%</td>
                <td>8.72%</td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Fidelity® Blue Chip Value Fund</th>
                <td>41.62%</td>
                <td>8.72%</td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Fidelity® Blue Chip Value Fund</th>
                <td>41.62%</td>
                <td>8.72%</td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Quarter;
