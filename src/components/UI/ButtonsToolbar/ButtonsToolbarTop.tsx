import React from "react";
import "./ButtonsToolbarTop.css";
import { Button, ButtonGroup } from "reactstrap";
import collapseSVG from "../../../assets/svg/collapse.svg";
import clearSVG from "../../../assets/svg/clear.svg";
import pinSVG from "../../../assets/svg/pin.svg";

const ButtonsToolbarTop = (props: any) => {
  const openMenu = () => {
    props.openActivityMenuHandler();
  };

  return (
    <ButtonGroup size="sm">
      <Button id="btn-top-e"
        onClick={() => {
          openMenu();
        }}
        outline
        color="secondary"
      >
        <img src={collapseSVG} alt="collapse" />
      </Button>
      <Button id="btn-top-p" outline color="secondary">
        <img src={pinSVG} alt="pin" />
      </Button>
      <Button id="btn-top-c" outline color="secondary">
        <img src={clearSVG} alt="clear" />
      </Button>
    </ButtonGroup>
  );
};

export default ButtonsToolbarTop;
