import React from "react";
import LeadersList from "./DeclineLeadersList";
import "./DeclineLeaders.css";
import ButtonsToolbarTop from "../../UI/ButtonsToolbar/ButtonsToolbarTop";
import ButtonSettings from "../../UI/ButtonSettings/ButtonSettings";

interface Props {}

const DeclineLeaders: React.FC = (props: Props) => {
  return (
    <div className="dleaders-wrapper">
      <div className="dleaders__header">
        <span className="dleaders__title">Decline Leaders</span>
        <ButtonsToolbarTop />
      </div>
      <div className="dleaders">
        <div className="dleaders__content">
          <LeadersList />
        </div>
      </div>
      <div className="dleaders__footer">
        <ButtonSettings />
        <ButtonsToolbarTop />
      </div>
    </div>
  );
};

export default DeclineLeaders;
