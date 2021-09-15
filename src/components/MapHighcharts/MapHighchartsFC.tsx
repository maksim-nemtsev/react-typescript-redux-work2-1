// import React from "react";
// // Import Highcharts
// import Highcharts from "highcharts";
// import HighchartsMap from "highcharts/modules/map";
// import HighchartsReact from "highcharts-react-official";
// import map from "@highcharts/map-collection/custom/world.geo.json";
// import "./MapHighcharts.css";
// import { AppDispatch, store } from "../../store/store";
// import { useSelector } from "react-redux";
// import { useAppDispatch } from "../../hooks/hooks";
// import { getCountryData } from "../../actions/CountryDataActions";
// HighchartsMap(Highcharts);

// function select(state: any) {
//   return state;
// }
// let currentValue: any;
// function handleChange() {
//   let previousValue = currentValue;
//   currentValue = select(store.getState().ListOfIndustries.isOpen);

//   if (previousValue !== currentValue) {
//     console.log(
//       "Некоторое глубокое вложенное свойство измененное от ",
//       previousValue,
//       "к",
//       currentValue
//     );
//   }
// }

// const unsubscribe = store.subscribe(handleChange);

// let _selectorsModes = {
//   x: "laboratory-tabs-body-center__badge",
//   y: "laboratory-tabs-body-left__badge",
//   z: "laboratory-tabs-body-right__badge",
// };

// let _selectorsText = {
//   x: ".laboratory-tabs-footer-center__text",
//   y: ".laboratory-tabs-body-left__text",
//   z: ".laboratory-tabs-body-right__text",
// };

// let _selectorsBadge = {
//   x: ".laboratory-tabs-footer-center",
//   y: ".laboratory-tabs-body-left-inner",
//   z: ".laboratory-tabs-body-right-inner",
// };

// const MapHighchartsFC: React.FC = () => {
//   console.log("REnder ~ MapHighchartsFC");
//   const mapCountyNameCode = useSelector(
//     (state: any) => state.initData.ents.countries
//   );
//   const dispatch: AppDispatch = useAppDispatch();

//   const getCountryNames = () => {
//     const countryNamesCode3 = Object.values(mapCountyNameCode);

//     return countryNamesCode3.map((el: any) => ({
//       code3: el.ISO3,
//       // z: el.countryInfo.stockShort["Last Close Market Cap"],
//       z: 12345,
//       code: el.ISO3,
//       countryId: el.id,
//     }));
//   };

//   const options = {
//     chart: {
//       width: 1920,
//       height: 900,
//       map: map,
//       marginTop: 70,
//       ackgroundColor: "transparent",
//     },

//     title: {
//       text: "",
//     },

//     subtitle: {
//       text: "",
//     },

//     legend: {
//       enabled: false,
//     },

//     mapNavigation: {
//       enabled: true,
//       enableMouseWheelZoom: true,
//       buttonOptions: {
//         verticalAlign: "bottom",
//       },
//     },

//     plotOptions: {
//       series: {
//         //shadow: true,
//         cursor: "pointer",
//         events: {
//           click: async function (event: any) {
//             return dispatch(await getCountryData(event.point.countryId));
//           },
//         },
//       },
//     },

//     series: [
//       {
//         name: "Countries",
//         color: "#E0E0E0",
//         nullColor: "#00A9E9",
//         enableMouseTracking: false,
//       },
//       {
//         type: "mapbubble",
//         shadow: true,
//         animation: false,
//         name: "Country",
//         joinBy: ["iso-a3", "code3"],
//         // data: mapCountyNameCode,
//         data: getCountryNames(),
//         minSize: 16,
//         maxSize: "12%",
//         tooltip: {
//           pointFormat: "{point.properties.hc-a2}: {point.z}",
//         },
//       },
//     ],
//   };

//   return (
//     <div className="highcharts-container" id="highcharts-container">
//       <HighchartsReact
//         highcharts={Highcharts}
//         options={options}
//         constructorType={"mapChart"}
//       />
//     </div>
//   );
// };
// export default React.memo(MapHighchartsFC);

import React from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts";
import HighchartsMap from "highcharts/modules/map";
import HighchartsReact from "highcharts-react-official";

import map from "@highcharts/map-collection/custom/world.geo.json";
import "./MapHighcharts.css";
import MapNews from "../MapNews/MapNews";
import GrowthLeaders from "../Leaders/GrowthLeaders/GrowthLeaders";
import DeclineLeaders from "../Leaders/DeclineLeaders/DeclineLeaders";
import ActivityLeaders from "../Leaders/ActivityLeaders/ActivityLeaders";
import MapMacroStock from "../MapMacroStock/MapMacroStock";

HighchartsMap(Highcharts);

let _selectorsModes = {
  x: "laboratory-tabs-body-center__badge",
  y: "laboratory-tabs-body-left__badge",
  z: "laboratory-tabs-body-right__badge",
};

let _selectorsText = {
  x: ".laboratory-tabs-footer-center__text",
  y: ".laboratory-tabs-body-left__text",
  z: ".laboratory-tabs-body-right__text",
};

let _selectorsBadge = {
  x: ".laboratory-tabs-footer-center",
  y: ".laboratory-tabs-body-left-inner",
  z: ".laboratory-tabs-body-right-inner",
};

class MapHighchartsFC extends React.Component {
  options = {
    chart: {
      width: 1320,
      height: 880,
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
    console.log("render LineChart");

    return (
      <div className="highcharts-container" id="highcharts-container">
        <HighchartsReact
          highcharts={Highcharts}
          options={this.options}
          constructorType={"mapChart"}
        />
        <MapNews />
        <ActivityLeaders />
        <GrowthLeaders />
        <DeclineLeaders />
        <MapMacroStock />
      </div>
    );
  }
}
export default MapHighchartsFC;
