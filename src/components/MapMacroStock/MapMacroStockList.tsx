import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import "./MapMacroStock.css";
import classnames from "classnames";

const ActivityLeadersList = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="map-macro-stock">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            MACRO
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            STOCK
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <ul className="map__macro-stock">
            <div className="map__macro-gpd">
              <li className="map__macro-stock">
                GDP{" "}
                <span className="map__macro-stock-info">
                  720 USD Billion (Dec/20)
                </span>
              </li>
              <li className="map__macro-yars">
                2021 <span className="map__macro-yars-info">740</span>
              </li>
              <li className="map__macro-yars">
                2021 <span className="map__macro-yars-info">740</span>
              </li>
              <li className="map__macro-yars">
                2021 <span className="map__macro-yars-info">740</span>
              </li>
            </div>
            <div className="map__macro-gdp">
              <li className="map__macro-stock">
                GDP{" "}
                <span className="map__macro-stock-info">
                  720 USD Billion (Dec/20)
                </span>
              </li>
              <li className="map__macro-yars">
                2021 <span className="map__macro-yars-info">740</span>
              </li>
              <li className="map__macro-yars">
                2021 <span className="map__macro-yars-info">740</span>
              </li>
              <li className="map__macro-yars">
                2021 <span className="map__macro-yars-info">740</span>
              </li>
            </div>
            <div className="map__macro-unemployed">
              <li className="map__macro-stock">
                GDP{" "}
                <span className="map__macro-stock-info">
                  720 USD Billion (Dec/20)
                </span>
              </li>
              <li className="map__macro-yars">
                2021 <span className="map__macro-yars-info">740</span>
              </li>
              <li className="map__macro-yars">
                2021 <span className="map__macro-yars-info">740</span>
              </li>
              <li className="map__macro-yars">
                2021 <span className="map__macro-yars-info">740</span>
              </li>
            </div>
            <div className="map__macro-unemployed">
              <li className="map__macro-stock">
                Gross National Product
                <span className="map__macro-stock-info">-</span>
              </li>
            </div>
          </ul>
        </TabPane>
      </TabContent>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="2">
          <ul className="map__macro-stock">
            <div className="map__macro-gpd">
              <li className="map__macro-stock">
                GDP{" "}
                <span className="map__macro-stock-info">
                  720 USD Billion (Dec/20)
                </span>
              </li>
              <li className="map__macro-yars">
                2021 <span className="map__macro-yars-info">740</span>
              </li>
              <li className="map__macro-yars">
                2021 <span className="map__macro-yars-info">740</span>
              </li>
              <li className="map__macro-yars">
                2021 <span className="map__macro-yars-info">740</span>
              </li>
            </div>
            <div className="map__macro-gdp">
              <li className="map__macro-stock">
                GDP{" "}
                <span className="map__macro-stock-info">
                  720 USD Billion (Dec/20)
                </span>
              </li>
              <li className="map__macro-yars">
                2021 <span className="map__macro-yars-info">40</span>
              </li>
              <li className="map__macro-yars">
                2021 <span className="map__macro-yars-info">40</span>
              </li>
              <li className="map__macro-yars">
                2021 <span className="map__macro-yars-info">40</span>
              </li>
            </div>
            <div className="map__macro-unemployed">
              <li className="map__macro-stock">
                GDP{" "}
                <span className="map__macro-stock-info">
                  20 USD Billion (Dec/20)
                </span>
              </li>
              <li className="map__macro-yars">
                2021 <span className="map__macro-yars-info">40</span>
              </li>
              <li className="map__macro-yars">
                2021 <span className="map__macro-yars-info">40</span>
              </li>
              <li className="map__macro-yars">
                2021 <span className="map__macro-yars-info">40</span>
              </li>
            </div>
            <div className="map__macro-unemployed">
              <li className="map__macro-stock">
                Gross
                <span className="map__macro-stock-info">-</span>
              </li>
            </div>
          </ul>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ActivityLeadersList;
