import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const options = {
  title: {
    text: "",
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9],
    },
  ],
};

const HighchartsMultipleSeries = () => (
  <div>
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
    />
  </div>
);

export default HighchartsMultipleSeries;
