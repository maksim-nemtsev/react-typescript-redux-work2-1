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
      <Button
        onClick={() => {
          openMenu();
        }}
        className="btn btn-toolbar-top"
        outline
        color="secondary"
      >
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
