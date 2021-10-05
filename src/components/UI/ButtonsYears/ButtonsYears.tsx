import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import "./ButtonsYears.css";

const ButtonsYears = () => {
  return (
    <ButtonGroup size="sm">
      <Button id="btn-years1" className="btn-years" color="secondary">
        D
      </Button>
      <Button id="btn-years2" className="btn-years" color="secondary">
        W
      </Button>
      <Button id="btn-years3" className="btn-years" color="secondary">
        M
      </Button>
      <Button id="btn-years4" className="btn-years" color="secondary">
        Y
      </Button>
      <Button id="btn-years5" className="btn-years" color="secondary">
        3Y
      </Button>
      <Button id="btn-years6" className="btn-years" color="secondary">
        5Y
      </Button>
      <Button id="btn-years7" className="btn-years" color="secondary">
        10Y
      </Button>
    </ButtonGroup>
  );
};

export default ButtonsYears;
