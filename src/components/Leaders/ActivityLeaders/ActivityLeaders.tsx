import React, { useState } from "react";
import LeadersList from "./ActivityLeadersList";
import "./ActivityLeaders.css";
import ButtonSettings from "../../UI/ButtonSettings/ButtonSettings";
import ButtonsToolbarBoottom from "../../UI/ButtonsToolbar/ButtonsToolbarBoottom";
import { Button, ButtonGroup } from "reactstrap";
import collapseSVG from "../../../assets/svg/collapse.svg";
import pinSVG from "../../../assets/svg/pin.svg";
import clearSVG from "../../../assets/svg/clear.svg";

const ActivityLeaders: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openActivityMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="aleaders-wrapper d-none d-lg-block">
      <div className="aleaders__header">
        <span className="aleaders__title">Activity Leaders</span>
        <ButtonGroup size="sm">
          <Button
            id="btn-top-e"
            onClick={openActivityMenuHandler}
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
      <div className={isOpen ? "aleaders" : "aleaders--hide"}>
        <div className="aleaders__content">
          <LeadersList />
        </div>
      </div>
      <div className={isOpen ? "aleaders__footer" : "aleaders__footer--hide"}>
        <ButtonSettings />
        <ButtonsToolbarBoottom />
      </div>
    </div>
  );
};

export default ActivityLeaders;
