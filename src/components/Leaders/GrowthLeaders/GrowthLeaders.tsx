import React, { useState } from "react";
import LeadersList from "./GrowthLeadersList";
import "./GrowthLeaders.css";
import ButtonSettings from "../../UI/ButtonSettings/ButtonSettings";
import ButtonsToolbarBoottom from "../../UI/ButtonsToolbar/ButtonsToolbarBoottom";
import collapseSVG from "../../../assets/svg/collapse.svg";
import pinSVG from "../../../assets/svg/pin.svg";
import clearSVG from "../../../assets/svg/clear.svg";
import { Button, ButtonGroup } from "reactstrap";

const GrowthLeaders: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openGrowthMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="gleaders-wrapper d-none d-lg-block">
      <div className="gleaders__header">
        <span className="gleaders__title">Growth Leaders</span>
        <ButtonGroup size="sm">
          <Button
            id="btn-top-e"
            onClick={openGrowthMenuHandler}
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
      </div>
      <div className={isOpen ? "gleaders" : "gleaders--hide"}>
        <div className="gleaders__content">
          <LeadersList />
        </div>
      </div>
      <div className={isOpen ? "gleaders__footer" : "gleaders__footer--hide"}>
        <ButtonSettings />
        <ButtonsToolbarBoottom />
      </div>
    </div>
  );
};

export default GrowthLeaders;
