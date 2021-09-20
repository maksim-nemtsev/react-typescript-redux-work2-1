import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./ProgressBar.css";

interface Props {}

const percentage = 66;

const ProgressBar = (props: Props) => {
  return (
    <CircularProgressbar
      className="progress-bar-defult"
      value={percentage}
      text={`${percentage}%`}
    />
  );
};

export default ProgressBar;
