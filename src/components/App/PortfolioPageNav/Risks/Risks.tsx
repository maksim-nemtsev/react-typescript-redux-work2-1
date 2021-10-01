// import React, { useState } from "react";
// import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
// import MultiSlider from "../../../UI/MultiSlider/MultiSlider";

// const Risks = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggle = () => setDropdownOpen((prevState) => !prevState);

//   return (
//     <Dropdown direction="left" isOpen={dropdownOpen} toggle={toggle}>
//       <DropdownToggle
//         className="nav__toggle"
//         tag="span"
//         data-toggle="dropdown"
//         aria-expanded={dropdownOpen}
//       >
//         RISKS
//       </DropdownToggle>
//       <DropdownMenu className="drop-down-menu risks">
//         <MultiSlider />
//       </DropdownMenu>
//     </Dropdown>
//   );
// };

// export default Risks;

import React, { useState } from "react";
import GrowthOrientedSVG from "../../../../assets/svg/growth-orientedSVG.svg";
import { AvForm, AvGroup, AvInput } from "availity-reactstrap-validation";

import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
} from "reactstrap";

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
        SEGMENT
        <Badge className="badge__count">1</Badge>
      </DropdownToggle>
      <DropdownMenu
        style={{ borderRadius: "20px" }}
        className="drop-down-menu portfolio"
      >
        <AvForm className="drop-down__form">
          <AvGroup className="form-check p-0" check>
            <div className="drop-down__image">
              <img
                src={GrowthOrientedSVG}
                alt="profile"
                className="drop-profile"
              />
            </div>
            <label className="drop-name portfolio">Ростоориентированные</label>
            <AvInput
              style={{ marginLeft: "8px", cursor: "pointer" }}
              className="drop-input"
              type="checkbox"
              name="inOrOut"
              trueValue="Yes, I'm in!"
              falseValue="NOPE!"
            />
          </AvGroup>
          <AvGroup className="form-check p-0" check>
            <div className="drop-down__image">
              <img
                src={GrowthOrientedSVG}
                alt="profile"
                className="drop-profile"
              />
            </div>
            <span className="drop-name portfolio">Ростоориентированные</span>
            <AvInput
              style={{ marginLeft: "8px", cursor: "pointer" }}
              className="drop-input"
              type="checkbox"
              name="inOrOut"
              trueValue="Yes, I'm in!"
              falseValue="NOPE!"
            />
          </AvGroup>
          <AvGroup className="form-check p-0" check>
            <div className="drop-down__image">
              <img
                src={GrowthOrientedSVG}
                alt="profile"
                className="drop-profile mr-2"
              />
            </div>
            <span className="drop-name portfolio">Ростоориентированные</span>
            <AvInput
              style={{ marginLeft: "8px", cursor: "pointer" }}
              className="drop-input"
              type="checkbox"
              name="inOrOut"
              trueValue="Yes, I'm in!"
              falseValue="NOPE!"
            />
          </AvGroup>
          <DropdownItem divider />
          <FormGroup>
            <div className="portfolio-segment__footer">
              <Button className="btn portfolio-segment__btn" color="link">
                Сбросить
              </Button>
              <Button className="btn portfolio-segment__btn" color="link">
                Применить
              </Button>
            </div>
          </FormGroup>
        </AvForm>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Risks;
