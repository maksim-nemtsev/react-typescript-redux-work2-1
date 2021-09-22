import React from "react";
import { render } from "react-dom";

import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import highcharts3d from "highcharts/highcharts-3d";
highcharts3d(Highcharts);

class HighchartsPolar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: "testing state",
      chartOptions: {
        chart: {
          type: "pie",
          options3d: {
            enabled: true,
            alpha: 45,
            beta: 0,
          },
        },
        title: {
          text: "",
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            depth: 35,
            dataLabels: {
              enabled: true,
              format: "{point.name}",
            },
          },
        },
        series: [
          {
            type: "pie",
            name: "Browser share",
            data: [
              ["Firefox", 45.0],
              ["IE", 26.8],
              {
                name: "Chrome",
                y: 12.8,
                sliced: true,
                selected: true,
              },
              ["Safari", 8.5],
              ["Opera", 6.2],
              ["Others", 0.7],
            ],
          },
        ],
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
      },
    };
  }

  componentDidMount() {
    this.setState({
      test: "changing state",
    });
  }
  render() {
    return (
      <div>
        <HighchartsReact
          options={this.state.chartOptions}
          highcharts={Highcharts}
        />
      </div>
    );
  }
}

export default HighchartsPolar;
