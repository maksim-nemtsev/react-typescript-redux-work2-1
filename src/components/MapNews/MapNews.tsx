import React from "react";
import MapNewsItem from "./MapNewsItem/MapNewsItem";
import "./MapNews.css";
import ButtonsToolbar from "../UI/ButtonsToolbar/ButtonsToolbarBoottom";
import ButtonSettings from "../UI/ButtonSettings/ButtonSettings";

interface Props {}

const MapNews = (props: Props) => {
  return (
    <div className="news-wrapper">
      <div className="news">
        <div className="news__content">
          <MapNewsItem />
        </div>
      </div>
      <div className="news__footer">
        <ButtonSettings />
        <ButtonsToolbar />
      </div>
    </div>
  );
};

export default MapNews;
