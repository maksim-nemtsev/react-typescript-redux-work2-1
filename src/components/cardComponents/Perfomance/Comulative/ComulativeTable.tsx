import "./ComulativeTable.css";
import React from "react";
import { Col, Container, Row, Table } from "reactstrap";
import styled from "styled-components";

const ComulativeTableTitle = styled.p`
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

const ComulativeTableSubTitle = styled.p`
  font-family: ArticulatCF;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #000b20;
`;

const ComulativeTableListItem = styled.li`
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

const ComulativeTable = (props: Props) => {
  return (
    <Container className="Executive">
      <Row>
        <ComulativeTableTitle>Cumulative Total Returns</ComulativeTableTitle>
        <ComulativeTableSubTitle>As of 5/31/2021 | *As of 6/18/2021</ComulativeTableSubTitle>
      </Row>
      <Row>
        <Col>
          <Table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>YTD (Daily)*</th>
                <th>YTD (Monthly)</th>
                <th>1 Month</th>
                <th>3 Months</th>
                <th>6 Months</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Fidelity® Blue Chip Value Fund</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
                <td>6.86%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Russell 1000 Value</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
                <td>6.86%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Large Value</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
                <td>6.86%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Beta</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
                <td>6.86%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Before Taxes</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
                <td>6.86%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Before Taxes</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
                <td>6.86%</td>
                <td>6.86%</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ComulativeTable;
