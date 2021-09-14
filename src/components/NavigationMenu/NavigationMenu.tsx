import React, { useState } from "react";
import "./NavigationMenu.css";
import { Link, NavLink } from "react-router-dom";
import {
  Media,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Nav,
  NavItem,
} from "reactstrap";
import LogoWS from "../../assets/svg/logo-ws.svg";
import avatar1 from "../../assets/img/avatar1.jpg";
import iconMap from "../../assets/svg/map.svg";
import iconLab from "../../assets/svg/lab.svg";
import iconPortfolio from "../../assets/svg/portfolio.svg";
import iconSettings from "../../assets/svg/settings.svg";
import iconProfile from "../../assets/svg/profile.svg";
import dropProfileSVG from "../../assets/svg/drop-profile.svg";
import dropMapSVG from "../../assets/svg/drop-map.svg";
import dropLabSVG from "../../assets/svg/drop-lab.svg";
import dropPortfolioSVG from "../../assets/svg/drop-portfolio.svg";
import dropMyPortfolioSVG from "../../assets/svg/drop-my-portfolio.svg";
import dropSettingsSVG from "../../assets/svg/drop-settings.svg";
import dropNitificationSVG from "../../assets/svg/drop-notification.svg";

type Tabs = {
  route: string;
  icon: HTMLElement;
  label: string;
};

const tabs = [
  {
    route: "/map",
    icon: iconMap,
    label: "Map",
  },
  {
    route: "/lab",
    icon: iconLab,
    label: "Labaratory",
  },
  {
    route: "/portfolio",
    icon: iconPortfolio,
    label: "Portfolio",
  },
  {
    route: "/main",
    icon: iconSettings,
    label: "Main Page",
  },
  {
    route: "/profile",
    icon: iconProfile,
    label: "Profile",
  },
];

interface Props {}

const NavigationMenu: React.FC = (props: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top"
        role="navigation"
      >
        <div className="container-fluid">
          <Media left href="/home">
            <Media src={LogoWS} alt="Logo-WS" />
          </Media>
          <Nav className="m-auto mr-2">
            <NavItem className="list-item">
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "#000b20",
                }}
                to="/map"
                exact={true}
                className="link-inactive"
                activeClassName="active"
              >
                MAP
              </NavLink>
            </NavItem>
            <NavItem className="list-item">
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "#000b20",
                  backgroundColor: "#f7f7f7",
                }}
                to="/lab"
                exact={true}
                className="link-inactive"
                activeClassName="active"
              >
                LABARATORY
              </NavLink>
            </NavItem>
            <NavItem className="list-item">
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "#000b20",
                }}
                to="/portfolio"
                exact={true}
                className="link-inactive"
                activeClassName="active"
              >
                PORTFOLIO
              </NavLink>
            </NavItem>
            <NavItem className="list-item">
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "#000b20",
                }}
                to="/home"
                exact={true}
                className="link-inactive"
                activeClassName="active"
              >
                HOME PAGE
              </NavLink>
            </NavItem>
            <NavItem className="list-item">
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "#000b20",
                }}
                to="/main"
                exact={true}
                className="link-inactive"
                activeClassName="active"
              >
                MAIN PAGE
              </NavLink>
            </NavItem>
          </Nav>
          <Dropdown direction="left" isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle tag="span">
              <Media src={avatar1} alt="Logo-WS" className="avatar" />
            </DropdownToggle>
            <DropdownMenu
              style={{ borderRadius: "20px" }}
              className="drop-down-menu"
            >
              <DropdownItem className="drop-down-header d-flex">
                <div className="drop-button-content">
                  <div className="drop-button-image">
                    <Media
                      src={dropProfileSVG}
                      alt="profile"
                      className="drop-profile mr-2"
                      s
                    />
                  </div>
                  <div className="drop-name-package">
                    <span className="drop-name">Alexey Alexeev</span>
                    <span className="drop-package">Investor Packege</span>
                  </div>
                </div>
              </DropdownItem>

              <DropdownItem divider />
              <DropdownItem className="drop-down-header d-flex">
                <div className="drop-button-content main">
                  <div className="drop-button-image">
                    <Media
                      src={dropMapSVG}
                      alt="profile"
                      className="drop-profile mr-2"
                      s
                    />
                  </div>
                  <div className="drop-name-package">
                    <span className="drop-name main">Map</span>
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem className="drop-down-header d-flex">
                <div className="drop-button-content main">
                  <div className="drop-button-image">
                    <Media
                      src={dropLabSVG}
                      alt="profile"
                      className="drop-profile mr-2"
                      s
                    />
                  </div>
                  <div className="drop-name-package">
                    <span className="drop-name main">Laboratory</span>
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem className="drop-down-header d-flex">
                <div className="drop-button-content main">
                  <div className="drop-button-image">
                    <Media
                      src={dropPortfolioSVG}
                      alt="profile"
                      className="drop-profile mr-2"
                      s
                    />
                  </div>
                  <div className="drop-name-package">
                    <span className="drop-name main">Portfolio</span>
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem className="drop-down-header d-flex">
                <div className="drop-button-content main">
                  <div className="drop-button-image">
                    <Media
                      src={dropNitificationSVG}
                      alt="profile"
                      className="drop-profile mr-2"
                      s
                    />
                  </div>
                  <div className="drop-name-package">
                    <span className="drop-name footer">Notification</span>
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem className="drop-down-header d-flex">
                <div className="drop-button-content main">
                  <div className="drop-button-image">
                    <Media
                      src={dropMyPortfolioSVG}
                      alt="profile"
                      className="drop-profile mr-2"
                      s
                    />
                  </div>
                  <div className="drop-name-package">
                    <span className="drop-name footer">My portfolios</span>
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem className="drop-down-header d-flex">
                <div className="drop-button-content main">
                  <div className="drop-button-image">
                    <Media
                      src={dropSettingsSVG}
                      alt="profile"
                      className="drop-profile mr-2"
                      s
                    />
                  </div>
                  <div className="drop-name-package">
                    <span className="drop-name footer">Settings</span>
                  </div>
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </nav>
      <nav
        className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav"
        role="navigation"
      >
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {tabs.map((tab, index) => (
              <NavItem key={`tab-${index}`}>
                <NavLink
                  to={tab.route}
                  className="nav-link bottom-nav-link"
                  activeClassName="active"
                >
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <Media src={tab.icon} alt="svg-bottom-menu Logo-WS" />
                    <div className="bottom-tab-label">{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))}
          </div>
        </Nav>
      </nav>
    </div>
  );
};

export default NavigationMenu;
