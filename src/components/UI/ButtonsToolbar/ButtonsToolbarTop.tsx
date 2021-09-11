import React from "react";
import "./ButtonsToolbarTop.css";
import { Button, ButtonGroup } from "reactstrap";
import collapseSVG from "../../../assets/svg/collapse.svg";
import clearSVG from "../../../assets/svg/clear.svg";
import pinSVG from "../../../assets/svg/pin.svg";

interface Props {}

const ButtonsToolbarTop = (props: Props) => {
  return (
    <ButtonGroup size="sm">
      <Button className="btn btn-toolbar-top" outline color="secondary">
        <img src={collapseSVG} alt="collapse" />
      </Button>
      <Button className="btn btn-toolbar-top" outline color="secondary">
        <img src={pinSVG} alt="pin" />
      </Button>
      <Button className="btn btn-toolbar-top" outline color="secondary">
        <img src={clearSVG} alt="clear" />
      </Button>
    </ButtonGroup>
  );
};

export default ButtonsToolbarTop;
