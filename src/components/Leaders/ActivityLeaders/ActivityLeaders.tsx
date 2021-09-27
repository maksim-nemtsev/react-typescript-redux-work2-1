import React, { useState } from "react";
import LeadersList from "./ActivityLeadersList";
import "./ActivityLeaders.css";
import ButtonsToolbarTop from "../../UI/ButtonsToolbar/ButtonsToolbarTop";
import ButtonSettings from "../../UI/ButtonSettings/ButtonSettings";
import ButtonsToolbarBoottom from "../../UI/ButtonsToolbar/ButtonsToolbarBoottom";

const ActivityLeaders: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const openActivityMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="aleaders-wrapper">
      <div className="aleaders__header">
        <span className="aleaders__title">Activity Leaders</span>
        <ButtonsToolbarTop openActivityMenuHandler={openActivityMenuHandler} />
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
