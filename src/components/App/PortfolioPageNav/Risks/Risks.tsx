import React, { useState } from "react";
import { Badge, Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import MultiSlider from "../../../UI/MultiSlider/MultiSlider";

const Risks = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [submit, setSubmit] = useState({});

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  // const handleSubmit = (val: any) => setSubmit({ val });

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        className={
          dropdownOpen === false
            ? `dropdown-toggle__menu-title`
            : `dropdown-toggle__menu-title active`
        }
        tag="span"
      >
        RANGE
        <Badge className="badge__count">0-100</Badge>
      </DropdownToggle>
      <DropdownMenu className="drop-down-menu risks">
        <MultiSlider />
      </DropdownMenu>
    </Dropdown>
  );
};

export default Risks;
