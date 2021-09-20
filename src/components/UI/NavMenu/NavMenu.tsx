import React from "react";
import { Nav, Navbar, NavItem } from "reactstrap";
import "./NavMenu.css";

const NavMenu = (props: any) => {
  return (
    <Navbar className="map nav-bar mt-4">
      <Nav className="nav-map">
        <NavItem className="nav-map__item">
          {props.titles.capitalization}
        </NavItem>
        <NavItem className="nav-map__item">{props.titles.activity}</NavItem>
        <NavItem className="nav-map__item">{props.titles.corporate}</NavItem>
        <NavItem className="nav-map__item">
          {props.titles.profitability}
        </NavItem>
        <NavItem className="nav-map__item">{props.titles.marginality}</NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavMenu;
