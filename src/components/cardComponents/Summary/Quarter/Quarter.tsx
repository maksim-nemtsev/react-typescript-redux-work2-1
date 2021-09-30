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
  font-size: 0.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #9faab3;
`;

interface Props {}

const Quarter = (props: Props) => {
  return (
    <Container className="Quarter">
      <Row>
        <Col className="Quarter_header">
          <QuarterTitle>Quarter-End Average Annual Total Returns</QuarterTitle>
          <QuarterSubTitle>
            As of 5/31/2021 | Fund Inception 6/17/2003 | Expense Ratio (Gross)
            0.63% as of 9/29/2020
          </QuarterSubTitle>
        </Col>
      </Row>

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
