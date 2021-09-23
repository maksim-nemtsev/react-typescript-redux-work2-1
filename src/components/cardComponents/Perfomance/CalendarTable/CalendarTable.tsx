import "./CalendarTable.css";
import React from "react";
import { Col, Container, Row, Table } from "reactstrap";
import styled from "styled-components";

const CalendarTableTitle = styled.p`
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

const CalendarTableSubTitle = styled.p`
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

const CalendarTableListItem = styled.li`
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

const CalendarTable = (props: Props) => {
  return (
    <Container className="Executive">
      <Row>
        <CalendarTableTitle>Calendar-Year Total Returns</CalendarTableTitle>
        <CalendarTableSubTitle>As of 5/31/2021</CalendarTableSubTitle>
      </Row>
      <Row>
        <Col>
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>2011</th>
                <th>2012</th>
                <th>2013</th>
                <th>2014</th>
                <th>2015</th>
                <th>2016</th>
                <th>2017</th>
                <th>2018</th>
                <th>2019</th>
                <th>2020</th>
                <th>2021</th>
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
                <td>41.62%</td>
                <td>8.72%</td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Fidelity® Blue Chip Value Fund</th>
                <td>41.62%</td>
                <td>8.72%</td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
                <td>41.62%</td>
                <td>8.72%</td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Fidelity® Blue Chip Value Fund</th>
                <td>41.62%</td>
                <td>8.72%</td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
                <td>41.62%</td>
                <td>8.72%</td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Fidelity® Blue Chip Value Fund</th>
                <td>41.62%</td>
                <td>8.72%</td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
                <td>41.62%</td>
                <td>8.72%</td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Fidelity® Blue Chip Value Fund</th>
                <td>41.62%</td>
                <td>8.72%</td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
                <td>41.62%</td>
                <td>8.72%</td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Fidelity® Blue Chip Value Fund</th>
                <td>41.62%</td>
                <td>8.72%</td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
                <td>41.62%</td>
                <td>8.72%</td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
                <td>6.86%</td>
              </tr>
              <tr>
                <th scope="row">Fidelity® Blue Chip Value Fund</th>
                <td>41.62%</td>
                <td>8.72%</td>
                <td>9.19%</td>
                <td>8.79%</td>
                <td>6.86%</td>
                <td>41.62%</td>
                <td>8.72%</td>
                <td>9.19%</td>
                <td>8.79%</td>
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

export default CalendarTable;
