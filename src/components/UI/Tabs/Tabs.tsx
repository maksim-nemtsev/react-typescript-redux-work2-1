import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import "./Tabs.css";

const Tabs = (props: any) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav className="mb-4">
        <span
          className="nav-tabs"
          onClick={() => {
            toggle("1");
          }}
        >
          Summary
        </span>
        <span
          className="nav-tabs"
          onClick={() => {
            toggle("2");
          }}
        >
          Performance
        </span>
        <span
          className="nav-tabs"
          onClick={() => {
            toggle("3");
          }}
        >
          Ratings & Risk
        </span>
        <span
          className="nav-tabs"
          onClick={() => {
            toggle("4");
          }}
        >
          Composition
        </span>
        <span
          className="nav-tabs"
          onClick={() => {
            toggle("5");
          }}
        >
          View All Tabs
        </span>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Tab 1 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <h4>Tab 2 Contents</h4>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <h4>Tab 3 Contents</h4>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <h4>Tab 4 Contents</h4>
          </Row>
        </TabPane>
        <TabPane tabId="5">
          <Row>
            <h4>Tab 5 Contents</h4>
          </Row>
        </TabPane>
        <TabPane tabId="6">
          <Row>
            <h4>Tab 6 Contents</h4>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Tabs;
