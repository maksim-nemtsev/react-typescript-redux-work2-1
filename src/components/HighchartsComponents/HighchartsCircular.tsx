import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "pie",
    renderTo: "atmospheric-composition",
  },
  title: {
    style: {
      fontSize: "0px",
    },
  },
  plotOptions: {
    pie: {
      innerSize: "85%",
      dataLabels: [{}],
      showInLegend: true,
    },
  },
  legend: {
    align: "right",
    verticalAlign: "top",
    layout: "vertical",
    x: 0,
    y: 100,
    backgroundColor: "yellow",
    itemWidth: 230,
    itemStyle: {
      fontSize: "16px",
      marginBottom: "20px",
      color: "darkblue",
      textOverflow: "allow",
    },
  },

  series: [],
};

const HighchartsCircular = () => {
  const [innerData, setData] = useState({
    name: "Apple",
    data: [
      {
        name: "Gold 16.03%",
        y: 0,
        color: "#3498db",
      },
      {
        name: "Long-term bonds 27.87%",
        y: 78.1,
        color: "#9b59b6",
      },
      {
        name: "Shares 23.95%",
        y: 20.9,
        color: "#2ecc71",
      },
      {
        name: "Short-term bonds 32.15%",
        y: 20.9,
        color: "#2ecc71",
      },
    ],
  });

  const onClick = () => {
    setData({
      name: "Gases",
      data: [
        {
          name: "Gold",
          y: 0,
          color: "#3498db",
        },
        {
          name: "Long-term bonds",
          y: 78.1,
          color: "#9b59b6",
        },
        {
          name: "Shares",
          y: 20.9,
          color: "#2ecc71",
        },
        {
          name: "Short-term bonds",
          y: 0.1,
          color: "#f1c40f",
        },
      ],
    });
  };
  const series = {
    series: [innerData],
  };
  return (
    <div onClick={onClick}>
      <HighchartsReact
        highcharts={Highcharts}
        options={{ ...options, ...series }}
      />
    </div>
  );
};

export default HighchartsCircular;
