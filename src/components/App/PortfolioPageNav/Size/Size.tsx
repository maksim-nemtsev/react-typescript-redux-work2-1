import React, { useState } from "react";
import { AvForm, AvGroup, AvInput } from "availity-reactstrap-validation";

import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Label,
} from "reactstrap";

const Size = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

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
        SIZE
        <Badge className="badge__count">1</Badge>
      </DropdownToggle>
      <DropdownMenu
        style={{ borderRadius: "20px" }}
        className="drop-down-menu size"
      >
        <AvForm className="drop-down__form">
          <AvGroup className="form-check p-0" check>
            <Label className="drop-name timeframes" check>
              Small
            </Label>
            <AvInput
              className="drop-input"
              type="checkbox"
              name="inOrOut"
              trueValue="Yes, I'm in!"
              falseValue="NOPE!"
            />
          </AvGroup>
          <AvGroup className="form-check p-0" check>
            <Label className="drop-name timeframes" check>
              Middle
            </Label>
            <AvInput
              className="drop-input"
              type="checkbox"
              name="inOrOut"
              trueValue="Yes, I'm in!"
              falseValue="NOPE!"
            />
          </AvGroup>
          <AvGroup className="form-check p-0" check>
            <Label className="drop-name timeframes" check>
              Big
            </Label>
            <AvInput
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

export default Size;
