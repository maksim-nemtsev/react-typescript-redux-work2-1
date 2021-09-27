import React from "react";
import "./ButtonsToolbarMacro.css";
import { Button, ButtonGroup } from "reactstrap";
import collapseSVG from "../../../assets/svg/collapse.svg";
import clearSVG from "../../../assets/svg/clear.svg";
import pinSVG from "../../../assets/svg/pin.svg";
import checkSVG from "../../../assets/svg/сheck.svg";

const ButtonsToolbarMacro = (props: any) => {
  const openMenuHandler = () => {
    props.openStockMenuHandler();
  };
  return (
    <div className="button-group">
      <ButtonGroup size="sm">
        <Button className="btn btn-toolbar-top" outline color="secondary">
          <img src={checkSVG} alt="collapse" />
        </Button>
      </ButtonGroup>
      <ButtonGroup size="sm">
        <Button
          onClick={() => openMenuHandler()}
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
    </div>
  );
};

export default ButtonsToolbarMacro;
