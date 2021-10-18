import React, { useState } from "react";
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
import MapFooterFilter from "../MapFooterFilter/MapFooterFilter";
import DeclineLeaders from "../Leaders/DeclineLeaders/DeclineLeaders";
import GrowthLeaders from "../Leaders/GrowthLeaders/GrowthLeaders";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { AppDispatch } from "../../store/store";
import WebApi from "../../api/WebApi";
import { reqCountryData } from "./MapHCH_SliceCountryData";

const Chevron = styled.div`
  position: absolute;
  display: flex;
  top: 41%;
  right: 220px;
  width: 2.5rem;
  height: 2.5rem;
  flex-grow: 0;
  padding: 0.813rem 0.938rem 0.813rem 1.063rem;
  border-radius: 20px;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
  transition: duration 0.9s;
  transition-property: transform;
`;

HighchartsMap(Highcharts);

const MapHighchartsFC = () => {
  console.log("REnder ~ MapHighchartsFC");
  const [isNewsClose, setIsNewsClose] = useState(false);
  const mapCountyNameCode = useAppSelector(
    (state: any) => state.initData.ents.countries
  );
  const dispatch: AppDispatch = useAppDispatch();
  const getCountryNames = () => {
    const countryNamesCode3 = Object.values(mapCountyNameCode);

    return countryNamesCode3.map((el: any) => ({
      code3: el.ISO3,
      // z: el.countryInfo.stockShort["Last Close Market Cap"],
      z: 12345,
      code: el.ISO3,
      countryId: el.id,
    }));
  };

  const newsToggleHandler = (): void => {
    setIsNewsClose(!isNewsClose);
  };

  const options = {
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
      enableMouseWheelZoom: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },
    plotOptions: {
      series: {
        cursor: "pointer",
        events: {
          click: async function (event: any) {
            const response = await WebApi.getCountryInfo(
              event.point.countryId,
              "d"
            )
              .then((response) => response.data)
              .catch((error) => console.error(error));
            dispatch(reqCountryData(event.point.countryId));
            return response;
          },
        },
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
        data: getCountryNames(),
        minSize: 10,
        maxSize: "6%",
        tooltip: {
          pointFormat: "{point.properties.hc-a2}: {point.z}",
        },
      },
    ],
  };
  return (
    <div className="highcharts-container" id="highcharts-container">
      <MapNavMenu />
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={"mapChart"}
      />
      {isNewsClose && <MapNews />}
      <Chevron
        onClick={newsToggleHandler}
        className={isNewsClose ? "chevron" : "chevron close"}
      >
        <img src={chevron} alt="toggle" />
      </Chevron>
      <ActivityLeaders />
      <DeclineLeaders />
      <GrowthLeaders />
      <MapMacroStock />
      <MapFooterFilter />
    </div>
  );
};
export default MapHighchartsFC;
