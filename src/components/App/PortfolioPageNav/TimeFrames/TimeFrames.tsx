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
import styled from "styled-components";

const DropDownImgLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TimeFrames = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [submit, setSubmit] = useState({});

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  // const handleSubmit = (val: any) => setSubmit({ val });

  return (
    <Dropdown direction="left" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        className={
          dropdownOpen === false
            ? `dropdown-toggle__menu-title`
            : `dropdown-toggle__menu-title active`
        }
        tag="span"
      >
        TIME FRAMES
        <Badge className="badge__count">1</Badge>
      </DropdownToggle>
      <DropdownMenu
        style={{ borderRadius: "20px" }}
        className="drop-down-menu timeframes"
      >
        <AvForm className="drop-down__form">
          <AvGroup
            className="form-check p-0 d-flex justify-content-between"
            check
          >
            <DropDownImgLabel>
              <img
                src={GrowthOrientedSVG}
                alt="profile"
                className="drop-profile"
              />
              <label className="drop-name portfolio">Day</label>
            </DropDownImgLabel>

            <AvInput
              style={{ marginLeft: "8px", cursor: "pointer" }}
              className="drop-input"
              type="checkbox"
              name="inOrOut"
              trueValue="Yes, I'm in!"
              falseValue="NOPE!"
            />
          </AvGroup>
          <AvGroup
            className="form-check p-0 d-flex justify-content-between"
            check
          >
            <DropDownImgLabel>
              <img
                src={GrowthOrientedSVG}
                alt="profile"
                className="drop-profile"
              />
              <label className="drop-name portfolio">Week</label>
            </DropDownImgLabel>

            <AvInput
              style={{ marginLeft: "8px", cursor: "pointer" }}
              className="drop-input"
              type="checkbox"
              name="inOrOut"
              trueValue="Yes, I'm in!"
              falseValue="NOPE!"
            />
          </AvGroup>
          <AvGroup
            className="form-check p-0 d-flex justify-content-between"
            check
          >
            <DropDownImgLabel>
              <img
                src={GrowthOrientedSVG}
                alt="profile"
                className="drop-profile"
              />
              <label className="drop-name portfolio">Month</label>
            </DropDownImgLabel>

            <AvInput
              style={{ marginLeft: "8px", cursor: "pointer" }}
              className="drop-input"
              type="checkbox"
              name="inOrOut"
              trueValue="Yes, I'm in!"
              falseValue="NOPE!"
            />
          </AvGroup>
          <AvGroup
            className="form-check p-0 d-flex justify-content-between"
            check
          >
            <DropDownImgLabel>
              <img
                src={GrowthOrientedSVG}
                alt="profile"
                className="drop-profile"
              />
              <label className="drop-name portfolio">Year</label>
            </DropDownImgLabel>

            <AvInput
              style={{ marginLeft: "8px", cursor: "pointer" }}
              className="drop-input"
              type="checkbox"
              name="inOrOut"
              trueValue="Yes, I'm in!"
              falseValue="NOPE!"
            />
          </AvGroup>
          <AvGroup
            className="form-check p-0 d-flex justify-content-between"
            check
          >
            <DropDownImgLabel>
              <img
                src={GrowthOrientedSVG}
                alt="profile"
                className="drop-profile"
              />
              <label className="drop-name portfolio">3 Year</label>
            </DropDownImgLabel>

            <AvInput
              style={{ marginLeft: "8px", cursor: "pointer" }}
              className="drop-input"
              type="checkbox"
              name="inOrOut"
              trueValue="Yes, I'm in!"
              falseValue="NOPE!"
            />
          </AvGroup>
          <AvGroup
            className="form-check p-0 d-flex justify-content-between"
            check
          >
            <DropDownImgLabel>
              <img
                src={GrowthOrientedSVG}
                alt="profile"
                className="drop-profile"
              />
              <label className="drop-name portfolio">5 Year</label>
            </DropDownImgLabel>

            <AvInput
              style={{ marginLeft: "8px", cursor: "pointer" }}
              className="drop-input"
              type="checkbox"
              name="inOrOut"
              trueValue="Yes, I'm in!"
              falseValue="NOPE!"
            />
          </AvGroup>
          <AvGroup
            className="form-check p-0 d-flex justify-content-between"
            check
          >
            <DropDownImgLabel>
              <img
                src={GrowthOrientedSVG}
                alt="profile"
                className="drop-profile"
              />
              <label className="drop-name portfolio">10 Year</label>
            </DropDownImgLabel>

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
                Cancel
              </Button>
              <Button className="btn portfolio-segment__btn" color="link">
                Add
              </Button>
            </div>
          </FormGroup>
        </AvForm>
      </DropdownMenu>
    </Dropdown>
  );
};

export default TimeFrames;
