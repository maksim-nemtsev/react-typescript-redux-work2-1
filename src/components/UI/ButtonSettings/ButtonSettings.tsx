import React from "react";
import { Button } from "reactstrap";
import settings2SVG from "../../../assets/svg/settings2.svg";

interface Props {}

const ButtonSettings = (props: Props) => {
  return (
    <Button outline color="secondary">
      <img src={settings2SVG} alt="settings" />
    </Button>
  );
};

export default ButtonSettings;
