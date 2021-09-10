import React from "react";
import MapNewsItem from "./MapNewsItem/MapNewsItem";
import "./MapNews.css";

interface Props {}

const MapNews = (props: Props) => {
  return (
    <div className="news-wrapper">
      <div className="news">
        <div className="news__content">
          <MapNewsItem />
        </div>
        <div className="news__footer"></div>
      </div>
    </div>
  );
};

export default MapNews;
