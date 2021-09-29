import React from "react";
import { Button } from "reactstrap";
import settings2SVG from "../../../assets/svg/settings2.svg";
import "./ButtonSettings.css";

const ButtonSettings = () => {
  return (
    <Button
      id="button-settings"
      className="btn-outline-secondary"
      outline
      color="secondary"
    >
      <img src={settings2SVG} alt="settings" />
    </Button>
  );
};

export default ButtonSettings;
