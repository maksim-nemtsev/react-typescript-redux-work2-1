import React from "react";
import MapNewsItem from "./MapNewsItem/MapNewsItem";
import "./MapNews.css";
import ButtonsToolbar from "../UI/ButtonsToolbar/ButtonsToolbarBoottom";
import ButtonSettings from "../UI/ButtonSettings/ButtonSettings";

const MapNews = () => {
  return (
    <div className="news-wrapper d-none d-lg-block">
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
