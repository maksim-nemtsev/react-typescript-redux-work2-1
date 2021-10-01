import React, { useState } from "react";
import { Col, Row, TabContent, TabPane } from "reactstrap";
import styled from "styled-components";
import HighchartsMultipleSeries from "../../../HighchartsComponents/HighchartsMultipleSeries";

const HypotheticalGrowthContainer = styled.div`
  padding: 1.875rem 2.5rem;
  border-radius: 8px;
  background-color: #fff;
`;

const AnalitycsTitle = styled.h4`
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

const AnalitycsNav = styled.nav``;

const AnalitycsListItem = styled.li`
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

const HypotheticalCount = styled.p`
  display: inline-block;
  margin-left: 0.2rem;
`;

const HypotheticalGrowth = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <HypotheticalGrowthContainer>
      <AnalitycsTitle>Hypothetical Growth of $ 10,000</AnalitycsTitle>
      <AnalitycsNav>
        <AnalitycsListItem
          onClick={() => {
            toggle("1");
          }}
        >
          СЕГМЕНТ <HypotheticalCount>3</HypotheticalCount>
        </AnalitycsListItem>
        <AnalitycsListItem
          onClick={() => {
            toggle("2");
          }}
        >
          СЕГМЕНТ <HypotheticalCount>1</HypotheticalCount>
        </AnalitycsListItem>
        <AnalitycsListItem
          onClick={() => {
            toggle("3");
          }}
        >
          СЕГМЕНТ <HypotheticalCount>2</HypotheticalCount>
        </AnalitycsListItem>
        <AnalitycsListItem
          onClick={() => {
            toggle("4");
          }}
        >
          СЕГМЕНТ <HypotheticalCount>1</HypotheticalCount>
        </AnalitycsListItem>
      </AnalitycsNav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col>
              <HighchartsMultipleSeries />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <HighchartsMultipleSeries />
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <HighchartsMultipleSeries />
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <HighchartsMultipleSeries />
          </Row>
        </TabPane>
      </TabContent>
    </HypotheticalGrowthContainer>
  );
};

export default HypotheticalGrowth;
