import React from "react";
import { Col, Row, Table } from "reactstrap";
import styled from "styled-components";

const DistributionTitle = styled.h4`
  display: inline-block;
  margin: 0 2.5rem 2.5rem 0;
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
const DistributionSubTitle = styled.h4`
  display: inline-block;
  margin-bottom: 1rem;
  display: inline-block;
  font-family: ArticulatCF;
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000b20;
`;

const DistributionContainer = styled.div`
  width: 100%;
  margin: 2.5rem 2.5rem 0 0;
  padding: 1.875rem 0 2.5rem 2.1rem;
  border-radius: 8px;
  background-color: #fff;
`;

const DistributionOverflow = styled.div`
  height: 24.3rem;
  overflow: auto;
`;

const Distribution = () => {
  return (
    <DistributionContainer>
      <Row>
        <Col sm="7">
          <DistributionTitle>Distribution</DistributionTitle>
        </Col>
        <Col sm="5">
          <DistributionSubTitle>September, December</DistributionSubTitle>
        </Col>
      </Row>
      <DistributionOverflow>
        <Col>
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>1 Month</th>
                <th>3 Months</th>
                <th>6 Months</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Fidelity® Blue Chip Value Fund</th>
                <td>6.86%</td>
                <td>6.86%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Russell 1000 Value</th>
                <td>6.86%</td>
                <td>6.86%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Large Value</th>
                <td>6.86%</td>
                <td>6.86%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Beta</th>
                <td>6.86%</td>
                <td>6.86%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Before Taxes</th>
                <td>6.86%</td>
                <td>6.86%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Before Taxes</th>
                <td>6.86%</td>
                <td>6.86%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Before Taxes</th>
                <td>6.86%</td>
                <td>6.86%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Before Taxes</th>
                <td>6.86%</td>
                <td>6.86%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Before Taxes</th>
                <td>6.86%</td>
                <td>6.86%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Before Taxes</th>
                <td>6.86%</td>
                <td>6.86%</td>
                <td>6.86%</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </DistributionOverflow>
    </DistributionContainer>
  );
};

export default Distribution;
