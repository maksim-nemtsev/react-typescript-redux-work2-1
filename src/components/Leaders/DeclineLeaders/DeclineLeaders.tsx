import React, { useState } from "react";
import LeadersList from "./DeclineLeadersList";
import "./DeclineLeaders.css";
import ButtonSettings from "../../UI/ButtonSettings/ButtonSettings";
import ButtonsToolbarBoottom from "../../UI/ButtonsToolbar/ButtonsToolbarBoottom";
import { Button, ButtonGroup } from "reactstrap";
import collapseSVG from "../../../assets/svg/collapse.svg";
import pinSVG from "../../../assets/svg/pin.svg";
import clearSVG from "../../../assets/svg/clear.svg";

const DeclineLeaders: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const openDeclineMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dleaders-wrapper">
      <div className="dleaders__header">
        <span className="dleaders__title">Decline Leaders</span>
        <ButtonGroup size="sm">
          <Button
            id="btn-top-e"
            onClick={openDeclineMenuHandler}
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
      <div className={isOpen ? "dleaders" : "dleaders--hide"}>
        <div className="dleaders__content">
          <LeadersList />
        </div>
      </div>
      <div className={isOpen ? "dleaders__footer" : "dleaders__footer--hide"}>
        <ButtonSettings />
        <ButtonsToolbarBoottom />
      </div>
    </div>
  );
};

export default DeclineLeaders;
