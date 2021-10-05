import React from "react";
import Highcharts from "highcharts";
import HighchartsMap from "highcharts/modules/map";
import HighchartsReact from "highcharts-react-official";
import map from "@highcharts/map-collection/custom/world.geo.json";
import "./MapHighcharts.css";
import MapNews from "../MapNews/MapNews";
import ActivityLeaders from "../Leaders/ActivityLeaders/ActivityLeaders";
import MapMacroStock from "../MapMacroStock/MapMacroStock";
import chevron from "../../assets/svg/map/сhevron-right.svg";
import styled from "styled-components";
import MapNavMenu from "../UI/NavMenu/MapNavMenu";

const Chevron = styled.div`
  position: absolute;
  display: flex;
  top: 40%;
  right: 220px;
  width: 2.5rem;
  height: 2.5rem;
  flex-grow: 0;
  margin: 1.685rem 0.452rem 1.726rem 13.5rem;
  padding: 0.813rem 0.938rem 0.813rem 1.063rem;
  border-radius: 20px;
  background-color: #fff;
  cursor: pointer;
`;

HighchartsMap(Highcharts);

class MapHighchartsFC extends React.Component {
  options = {
    chart: {
      width: 1320,
      height: 690,
      map: map,
      marginTop: 70,
      ackgroundColor: "transparent",
    },

    title: {
      text: "",
    },

    subtitle: {
      text: "",
    },

    legend: {
      enabled: false,
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },

    series: [
      {
        name: "Countries",
        color: "#E0E0E0",
        nullColor: "#00A9E9",
        enableMouseTracking: false,
      },
      {
        type: "mapbubble",
        shadow: true,
        animation: false,
        name: "highcharts map",
        joinBy: ["iso-a3", "code3"],
        data: [
          {
            code3: "AFG",
            z: 34656,
            code: "AF",
          },
        ],
        minSize: 10,
        maxSize: "12%",
        tooltip: {
          pointFormat: "{point.properties.hc-a2}: {point.z}",
        },
      },
    ],
  };

  render() {
    return (
      <div className="highcharts-container" id="highcharts-container">
        <MapNavMenu/>
        <HighchartsReact
          highcharts={Highcharts}
          options={this.options}
          constructorType={"mapChart"}
        />
        <MapNews />
        <Chevron className="chevron">
          <img src={chevron} alt="toggle" />
        </Chevron>
        <ActivityLeaders />
        <MapMacroStock />
      </div>
    );
  }
}
export default MapHighchartsFC;
