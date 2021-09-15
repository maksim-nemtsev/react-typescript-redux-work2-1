import React from "react";
import { Nav, Navbar, NavItem, NavbarBrand } from "reactstrap";
import "./NavMenu.css";

interface Props {}

const NavMenu = (props: Props) => {
  return (
    <Navbar className="map nav-bar mt-4">
      <Nav className="nav-map">
        <NavItem className="nav-map__item">CAPITALIZATION</NavItem>
        <NavItem className="nav-map__item">ACTIVITY & GROWTH</NavItem>
        <NavItem className="nav-map__item">CORPORATE DEBT</NavItem>
        <NavItem className="nav-map__item">PROFITABILITY</NavItem>
        <NavItem className="nav-map__item">MARGINALITY</NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavMenu;
