import React from "react";
import LeadersList from "./ActivityLeadersList";
import "./ActivityLeaders.css";
import ButtonsToolbarTop from "../../UI/ButtonsToolbar/ButtonsToolbarTop";
import ButtonSettings from "../../UI/ButtonSettings/ButtonSettings";

interface Props {}

const ActivityLeaders: React.FC = (props: Props) => {
  return (
    <div className="aleaders-wrapper">
      <div className="aleaders__header">
        <span className="aleaders__title">Decline Leaders</span>
        <ButtonsToolbarTop />
      </div>
      <div className="aleaders">
        <div className="aleaders__content">
          <LeadersList />
        </div>
      </div>
      <div className="aleaders__footer">
        <ButtonSettings />
        <ButtonsToolbarTop />
      </div>
    </div>
  );
};

export default ActivityLeaders;
