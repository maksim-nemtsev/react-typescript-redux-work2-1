import React from "react";
import { Nav, Navbar, NavItem, NavbarBrand } from "reactstrap";

interface Props {}

const NavMenu = (props: Props) => {
  return (
    <Navbar>
      <Nav className="nav">
        <NavItem>
          <NavbarBrand to="/map" className="nav-link">
            CAPITALIZATION
          </NavbarBrand>
        </NavItem>
        <NavItem>
          <NavbarBrand to="/lab" className="nav-link">
            ACTIVITY & GROWTH
          </NavbarBrand>
        </NavItem>
        <NavItem>
          <NavbarBrand to="/portfolio" className="nav-link">
            CORPORATE DEBT
          </NavbarBrand>
        </NavItem>
        <NavItem>
          <NavbarBrand to="/home" className="nav-link">
            PROFITABILITY
          </NavbarBrand>
        </NavItem>
        <NavItem>
          <NavbarBrand to="/main" className="nav-link">
            MARGINALITY
          </NavbarBrand>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavMenu;
