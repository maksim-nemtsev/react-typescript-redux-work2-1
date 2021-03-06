import React from "react";
import { Col, Row, Table } from "reactstrap";
import styled from "styled-components";

const ComulativeContainer = styled.div`
  margin-top: 2.5rem;
  padding: 1.875rem 2.5rem;
  background-color: #fff;
`;

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

const ComulativeTable = () => {
  return (
    <ComulativeContainer>
      <Row>
        <ComulativeTableTitle>Cumulative Total Returns</ComulativeTableTitle>
        <ComulativeTableSubTitle>
          As of 5/31/2021 | *As of 6/18/2021
        </ComulativeTableSubTitle>
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
    </ComulativeContainer>
  );
};

export default ComulativeTable;
