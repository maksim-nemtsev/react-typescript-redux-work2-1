import React, { useState } from "react";
import GrowthOrientedSVG from "../../../../assets/svg/growth-orientedSVG.svg";
import { AvForm, AvGroup, AvInput } from "availity-reactstrap-validation";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Input,
  Label,
  Media,
} from "reactstrap";

const CountriesAndRegions = () => {
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
        COUNTRIES & REGIONS
      </DropdownToggle>
      <DropdownMenu
        style={{ borderRadius: "20px" }}
        className="drop-down-menu regions"
      >
        <AvForm className="drop-down__form">
          <Input className="drop-down__country-input" />
          <div className="drop-down__overflow">
            <AvGroup className="form-check p-0" check>
              <div className="drop-down__image">
                <Media
                  src={GrowthOrientedSVG}
                  alt="profile"
                  className="drop-profile mr-2"
                  s
                />
              </div>
              <Label className="drop-name main" check>
                Грузия
              </Label>
              <AvInput
                className="drop-input countries"
                type="checkbox"
                name="inOrOut"
                trueValue="Yes, I'm in!"
                falseValue="NOPE!"
              />
            </AvGroup>
            <AvGroup className="form-check p-0" check>
              <div className="drop-down__image">
                <Media
                  src={GrowthOrientedSVG}
                  alt="profile"
                  className="drop-profile mr-2"
                  s
                />
              </div>
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
                type="checkbox"
                name="inOrOut"
                trueValue="Yes, I'm in!"
                falseValue="NOPE!"
              />
            </AvGroup>
            <AvGroup className="form-check p-0" check>
              <div className="drop-down__image">
                <Media
                  src={GrowthOrientedSVG}
                  alt="profile"
                  className="drop-profile mr-2"
                  s
                />
              </div>
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
                type="checkbox"
                name="inOrOut"
                trueValue="Yes, I'm in!"
                falseValue="NOPE!"
              />
            </AvGroup>
            <AvGroup className="form-check p-0" check>
              <div className="drop-down__image">
                <Media
                  src={GrowthOrientedSVG}
                  alt="profile"
                  className="drop-profile mr-2"
                  s
                />
              </div>
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
                type="checkbox"
                name="inOrOut"
                trueValue="Yes, I'm in!"
                falseValue="NOPE!"
              />
            </AvGroup>
            <AvGroup className="form-check p-0" check>
              <div className="drop-down__image">
                <Media
                  src={GrowthOrientedSVG}
                  alt="profile"
                  className="drop-profile mr-2"
                  s
                />
              </div>
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
                type="checkbox"
                name="inOrOut"
                trueValue="Yes, I'm in!"
                falseValue="NOPE!"
              />
            </AvGroup>
            <AvGroup className="form-check p-0" check>
              <div className="drop-down__image">
                <Media
                  src={GrowthOrientedSVG}
                  alt="profile"
                  className="drop-profile mr-2"
                  s
                />
              </div>
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
                type="checkbox"
                name="inOrOut"
                trueValue="Yes, I'm in!"
                falseValue="NOPE!"
              />
            </AvGroup>
            <AvGroup className="form-check p-0" check>
              <div className="drop-down__image">
                <Media
                  src={GrowthOrientedSVG}
                  alt="profile"
                  className="drop-profile mr-2"
                  s
                />
              </div>
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
                type="checkbox"
                name="inOrOut"
                trueValue="Yes, I'm in!"
                falseValue="NOPE!"
              />
            </AvGroup>
            <AvGroup className="form-check p-0" check>
              <div className="drop-down__image">
                <Media
                  src={GrowthOrientedSVG}
                  alt="profile"
                  className="drop-profile mr-2"
                  s
                />
              </div>
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
                type="checkbox"
                name="inOrOut"
                trueValue="Yes, I'm in!"
                falseValue="NOPE!"
              />
            </AvGroup>
            <AvGroup className="form-check p-0" check>
              <div className="drop-down__image">
                <Media
                  src={GrowthOrientedSVG}
                  alt="profile"
                  className="drop-profile mr-2"
                  s
                />
              </div>
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
                type="checkbox"
                name="inOrOut"
                trueValue="Yes, I'm in!"
                falseValue="NOPE!"
              />
            </AvGroup>
            <AvGroup className="form-check p-0" check>
              <div className="drop-down__image">
                <Media
                  src={GrowthOrientedSVG}
                  alt="profile"
                  className="drop-profile mr-2"
                  s
                />
              </div>
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
                type="checkbox"
                name="inOrOut"
                trueValue="Yes, I'm in!"
                falseValue="NOPE!"
              />
            </AvGroup>
            <AvGroup className="form-check p-0" check>
              <div className="drop-down__image">
                <Media
                  src={GrowthOrientedSVG}
                  alt="profile"
                  className="drop-profile mr-2"
                  s
                />
              </div>
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
                type="checkbox"
                name="inOrOut"
                trueValue="Yes, I'm in!"
                falseValue="NOPE!"
              />
            </AvGroup>
            <AvGroup className="form-check p-0" check>
              <div className="drop-down__image">
                <Media
                  src={GrowthOrientedSVG}
                  alt="profile"
                  className="drop-profile mr-2"
                  s
                />
              </div>
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
                type="checkbox"
                name="inOrOut"
                trueValue="Yes, I'm in!"
                falseValue="NOPE!"
              />
            </AvGroup>
            <AvGroup className="form-check p-0" check>
              <div className="drop-down__image">
                <Media
                  src={GrowthOrientedSVG}
                  alt="profile"
                  className="drop-profile mr-2"
                  s
                />
              </div>
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
                type="checkbox"
                name="inOrOut"
                trueValue="Yes, I'm in!"
                falseValue="NOPE!"
              />
            </AvGroup>
          </div>
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

export default CountriesAndRegions;
