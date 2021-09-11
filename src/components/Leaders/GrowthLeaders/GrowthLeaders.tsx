import React from "react";
import "./GrowthLeaders.css";
import ButtonsToolbarTop from "../../UI/ButtonsToolbar/ButtonsToolbarTop";
import ButtonSettings from "../../UI/ButtonSettings/ButtonSettings";
import GrowthLeadersList from "./GrowthLeadersList";

interface Props {}

const GrowthLeaders = (props: Props) => {
  return (
    <div className="gleaders-wrapper">
      <div className="gleaders__header">
        <span className="gleaders__title">Growth Leaders</span>
        <ButtonsToolbarTop />
      </div>
      <div className="gleaders">
        <div className="gleaders__content">
          <GrowthLeadersList />
        </div>
      </div>
      <div className="gleaders__footer">
        <ButtonSettings />
        <ButtonsToolbarTop />
      </div>
    </div>
  );
};

export default GrowthLeaders;
