import React from "react";
import { Button, ButtonGroup } from "reactstrap";

interface Props {}

const ButtonsToolbarBoottom = (props: Props) => {
  return (
    <ButtonGroup size="sm">
      <Button id="btn-sci-1" className="btn-csi" color="secondary">
        C
      </Button>
      <Button id="btn-sci-2" className="btn-csi" color="secondary">
        S
      </Button>
      <Button id="btn-sci-3" className="btn-csi" color="secondary">
        I
      </Button>
    </ButtonGroup>
  );
};

export default ButtonsToolbarBoottom;
