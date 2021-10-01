import React, { useState } from "react";
import { TabContent, TabPane, Nav, Row, Col, Container } from "reactstrap";
import "./Tabs.css";
import Analytics from "../../cardComponents/Summary/Analytics/Analytics";
import Executive from "../../cardComponents/Summary/Executive/Executive";
import HypotheticalGrowth from "../../cardComponents/Summary/HypotheticalGrowth/HypotheticalGrowth";
import AverageAnnual from "../../cardComponents/Summary/AverageAnnual/AverageAnnual";
import Quarter from "../../cardComponents/Summary/Quarter/Quarter";
import Details from "../../cardComponents/Summary/Details/Details";
import Overview from "../../cardComponents/Summary/Overview/Overview";
import Volatility from "../../cardComponents/Perfomance/Volatility/Volatility";
import CalendarTable from "../../cardComponents/Perfomance/CalendarTable/CalendarTable";
import ComulativeTable from "../../cardComponents/Perfomance/Comulative/ComulativeTable";
import Distribution from "../../cardComponents/Perfomance/Distribution/Distribution";
import Expenses from "../../cardComponents/Perfomance/Expenses/Expenses";
import CompanyRatings from "../../cardComponents/Ratings/CompanyRatings/CompanyRatings";
import CompanyRisk from "../../cardComponents/Ratings/CompanyRisk/CompanyRisk";
import AllRatings from "../../cardComponents/Ratings/AllRatings/AllRatings";
import Blog from "../../Blog/Blog";
import Facts from "../../cardComponents/Ratings/Facts/Facts";

const Tabs = (props: any) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Container>
      <Nav className="mb-4">
        <span
          className={
            activeTab === "1" ? "tabs-navigation active" : "tabs-navigation"
          }
          onClick={() => {
            toggle("1");
          }}
        >
          Summary
        </span>
        <span
          className={
            activeTab === "2" ? "tabs-navigation active" : "tabs-navigation"
          }
          onClick={() => {
            toggle("2");
          }}
        >
          Performance
        </span>
        <span
          className={
            activeTab === "3" ? "tabs-navigation active" : "tabs-navigation"
          }
          onClick={() => {
            toggle("3");
          }}
        >
          Ratings & Risk
        </span>
        <span
          className={
            activeTab === "4" ? "tabs-navigation active" : "tabs-navigation"
          }
          onClick={() => {
            toggle("4");
          }}
        >
          View All Tabs
        </span>
        <span
          className={
            activeTab === "5" ? "tabs-navigation active" : "tabs-navigation"
          }
          onClick={() => {
            toggle("5");
          }}
        >
          Blog
        </span>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row className="d-flex justify-content-between">
            <Col sm="6">
              <Analytics />
            </Col>
            <Col sm="6">
              <Executive />
            </Col>
          </Row>
          <Row>
            <Col>
              <HypotheticalGrowth />
            </Col>
          </Row>
          <Row>
            <Col>
              <AverageAnnual />
            </Col>
          </Row>
          <Row>
            <Col>
              <Quarter />
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <Details />
            </Col>
            <Col sm="6">
              <Overview />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col>
              <Volatility />
            </Col>
          </Row>
          <Row>
            <Col>
              <CalendarTable />
            </Col>
          </Row>
          <Row>
            <Col>
              <ComulativeTable />
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <Distribution />
            </Col>
            <Col sm="6">
              <Expenses />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="6">
              <CompanyRatings />
            </Col>
            <Col sm="6">
              <CompanyRisk />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex flex-wrap">
              <Col className="mb-3" sm="6">
                <AllRatings />
              </Col>
              <Col className="mb-3" sm="6">
                <AllRatings />
              </Col>
              <Col className="mb-3" sm="6">
                <AllRatings />
              </Col>
              <Col className="mb-3" sm="6">
                <AllRatings />
              </Col>
              <Col className="mb-3" sm="6">
                <AllRatings />
              </Col>
              <Col className="mb-3" sm="6">
                <AllRatings />
              </Col>
              <Col className="mb-3" sm="6">
                <AllRatings />
              </Col>
              <Col className="mb-3" sm="6">
                <AllRatings />
              </Col>
              <Col className="mb-3" sm="6">
                <AllRatings />
              </Col>
              <Col className="mb-3" sm="6">
                <AllRatings />
              </Col>
              <Col className="mb-3" sm="6">
                <AllRatings />
              </Col>
              <Col className="mb-3" sm="6">
                <AllRatings />
              </Col>
            </Col>
          </Row>
          <Row>
            <Col>
              <Facts />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row></Row>
        </TabPane>
        <TabPane tabId="5">
          <Row>
            <Blog />
          </Row>
        </TabPane>
        <TabPane tabId="6">
          <Row>
            <h4>Tab 6 Contents</h4>
          </Row>
        </TabPane>
      </TabContent>
    </Container>
  );
};

export default Tabs;
