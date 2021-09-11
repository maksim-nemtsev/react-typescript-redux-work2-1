import React from "react";
import { Button, ButtonGroup } from "reactstrap";

interface Props {}

const ButtonsToolbarBoottom = (props: Props) => {
  return (
    <ButtonGroup size="sm">
      <Button outline color="secondary">
        C
      </Button>
      <Button outline color="secondary">
        S
      </Button>
      <Button outline color="secondary">
        I
      </Button>
    </ButtonGroup>
  );
};

export default ButtonsToolbarBoottom;
