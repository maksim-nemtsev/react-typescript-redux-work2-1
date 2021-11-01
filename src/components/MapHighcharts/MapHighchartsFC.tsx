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
import MapMobileNews from "../mobile/MapMobileNews/MapMobileNews";
import MapMobBottomMenu from "../mobile/MapMobBottomMenu/MapMobBottomMenu";

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
  @media (max-width: 960px) {
    top: 93%;
    left: 44%;
    -webkit-transform: rotate(270deg) !important;
    -moz-transform: rotate(270deg) !important;
    -o-transform: rotate(270deg) !important;
    -ms-transform: rotate(270deg) !important;
    transform: rotate(270deg) !important;
    &:hover {
      -webkit-transform: rotate(90deg) !important;
      -moz-transform: rotate(90deg) !important;
      -o-transform: rotate(90deg) !important;
      -ms-transform: rotate(90deg) !important;
      transform: rotate(90deg) !important;
    }
  }
  transition: duration 0.9s;
  transition-property: transform;
`;

HighchartsMap(Highcharts);

const MapHighchartsFC = () => {
  console.log("REnder ~ MapHighchartsFC");
  const [isNewsClose, setIsNewsClose] = useState(false);
  const [isMobileBottomMenuClose, setIsMobileBottomMenuClose] = useState(false);
  const [isMobileNewsClose, setIsMobileNewsClose] = useState(false);
  const mapMobCountyInfoIsOpen = useAppSelector(
    (state) => state.countryData.isFetching
  );
  // const mapCountyNameCode = useAppSelector(
  //   (state: any) => state.initData.ents.countries
  // );
  const mockCountryData = [
    {
      id: 948,
      name: "All World",
      ISO3: "ALL",
      currency: "USD",
    },
    {
      id: 13,
      name: "Австралия",
      ISO3: "AUS",
      currency: "AUD",
    },
    {
      id: 44,
      name: "Австрия",
      ISO3: "AUT",
      currency: "EUR",
    },
    {
      id: 68,
      name: "Азербайджан",
      ISO3: "AZE",
      currency: "AZN",
    },
    {
      id: 76,
      name: "Ангилья",
      ISO3: "AIA",
      currency: "XCD",
    },
    {
      id: 60,
      name: "Аргентина",
      ISO3: "ARG",
      currency: "ARS",
    },
    {
      id: 84,
      name: "Багамские острова",
      ISO3: "BHS",
      currency: "BSD",
    },
    {
      id: 40,
      name: "Бангладеш",
      ISO3: "BGD",
      currency: "BDT",
    },
    {
      id: 87,
      name: "Барбадос",
      ISO3: "BRB",
      currency: "BBD",
    },
    {
      id: 124,
      name: "Бахрейн",
      ISO3: "BHR",
      currency: "BHD",
    },
    {
      id: 77,
      name: "Белиз",
      ISO3: "BLZ",
      currency: "BZD",
    },
    {
      id: 49,
      name: "Бельгия",
      ISO3: "BEL",
      currency: "EUR",
    },
    {
      id: 133,
      name: "Бенин",
      ISO3: "BEN",
      currency: "XOF",
    },
    {
      id: 20,
      name: "Бермудские острова",
      ISO3: "BMU",
      currency: "BMD",
    },
    {
      id: 3,
      name: "Болгария",
      ISO3: "BGR",
      currency: "BGN",
    },
    {
      id: 85,
      name: "Босния и Герцеговина",
      ISO3: "BIH",
      currency: "BAM",
    },
    {
      id: 112,
      name: "Ботсвана",
      ISO3: "BWA",
      currency: "BWP",
    },
    {
      id: 29,
      name: "Бразилия",
      ISO3: "BRA",
      currency: "BRL",
    },
    {
      id: 134,
      name: "Буркина-Фасо",
      ISO3: "BFA",
      currency: "XOF",
    },
    {
      id: 11,
      name: "Великобритания",
      ISO3: "GBR",
      currency: "GBP",
    },
    {
      id: 31,
      name: "Венгрия",
      ISO3: "HUN",
      currency: "HUF",
    },
    {
      id: 67,
      name: "Виргинские острова",
      ISO3: "VGB",
      currency: "USD",
    },
    {
      id: 14,
      name: "Вьетнам",
      ISO3: "VNM",
      currency: "VND",
    },
    {
      id: 143,
      name: "Габон",
      ISO3: "GAB",
      currency: "XAF",
    },
    {
      id: 144,
      name: "Гамбия",
      ISO3: "GMB",
      currency: "GMD",
    },
    {
      id: 115,
      name: "Гана",
      ISO3: "GHA",
      currency: "GHS",
    },
    {
      id: 10,
      name: "Германия",
      ISO3: "DEU",
      currency: "EUR",
    },
    {
      id: 33,
      name: "Гибралтар",
      ISO3: "GIB",
      currency: "GIP",
    },
    {
      id: 16,
      name: "Гонконг",
      ISO3: "HKG",
      currency: "HKD",
    },
    {
      id: 91,
      name: "Гренландия",
      ISO3: "GRL",
      currency: "DKK",
    },
    {
      id: 55,
      name: "Греция",
      ISO3: "GRC",
      currency: "EUR",
    },
    {
      id: 90,
      name: "Грузия",
      ISO3: "GEO",
      currency: "GEL",
    },
    {
      id: 24,
      name: "Дания",
      ISO3: "DNK",
      currency: "DKK",
    },
    {
      id: 64,
      name: "Доминиканская Республика",
      ISO3: "DOM",
      currency: "DOP",
    },
    {
      id: 106,
      name: "Египет",
      ISO3: "EGY",
      currency: "EGP",
    },
    {
      id: 119,
      name: "Замбия",
      ISO3: "ZMB",
      currency: "ZMW",
    },
    {
      id: 120,
      name: "Зимбабве",
      ISO3: "ZWE",
      currency: "ZWL",
    },
    {
      id: 105,
      name: "Израиль",
      ISO3: "ISR",
      currency: "ILS",
    },
    {
      id: 19,
      name: "Индия",
      ISO3: "IND",
      currency: "INR",
    },
    {
      id: 80,
      name: "Индонезия",
      ISO3: "IDN",
      currency: "IDR",
    },
    {
      id: 116,
      name: "Иордания",
      ISO3: "JOR",
      currency: "JOD",
    },
    {
      id: 47,
      name: "Ирландия",
      ISO3: "IRL",
      currency: "EUR",
    },
    {
      id: 73,
      name: "Исландия",
      ISO3: "ISL",
      currency: "ISK",
    },
    {
      id: 17,
      name: "Испания",
      ISO3: "ESP",
      currency: "EUR",
    },
    {
      id: 30,
      name: "Италия",
      ISO3: "ITA",
      currency: "EUR",
    },
    {
      id: 1,
      name: "Казахстан",
      ISO3: "KAZ",
      currency: "KZT",
    },
    {
      id: 52,
      name: "Каймановы острова",
      ISO3: "CYM",
      currency: "KYD",
    },
    {
      id: 86,
      name: "Камбоджа",
      ISO3: "KHM",
      currency: "KHR",
    },
    {
      id: 7,
      name: "Канада",
      ISO3: "CAN",
      currency: "CAD",
    },
    {
      id: 108,
      name: "Катар",
      ISO3: "QAT",
      currency: "QAR",
    },
    {
      id: 113,
      name: "Кения",
      ISO3: "KEN",
      currency: "KES",
    },
    {
      id: 35,
      name: "Кипр",
      ISO3: "CYP",
      currency: "EUR",
    },
    {
      id: 12,
      name: "Китай",
      ISO3: "CHN",
      currency: "CNY",
    },
    {
      id: 51,
      name: "Колумбия",
      ISO3: "COL",
      currency: "COP",
    },
    {
      id: 139,
      name: "Конго",
      ISO3: "COD",
      currency: "CDF",
    },
    {
      id: 22,
      name: "Корея",
      ISO3: "KOR",
      currency: "KPW",
    },
    {
      id: 82,
      name: "Коста-Рика",
      ISO3: "CRI",
      currency: "CRC",
    },
    {
      id: 125,
      name: "Кот-д’Ивуар",
      ISO3: "CIV",
      currency: "XOF",
    },
    {
      id: 109,
      name: "Кувейт",
      ISO3: "KWT",
      currency: "KWD",
    },
    {
      id: 89,
      name: "Кюрасао",
      ISO3: "CUW",
      currency: "ANG",
    },
    {
      id: 38,
      name: "Латвия",
      ISO3: "LVA",
      currency: "EUR",
    },
    {
      id: 132,
      name: "Ливан",
      ISO3: "LBN",
      currency: "LBP",
    },
    {
      id: 42,
      name: "Литва",
      ISO3: "LTU",
      currency: "EUR",
    },
    {
      id: 94,
      name: "Лихтенштейн",
      ISO3: "LIE",
      currency: "CHF",
    },
    {
      id: 54,
      name: "Люксембург",
      ISO3: "LUX",
      currency: "EUR",
    },
    {
      id: 104,
      name: "Маврикий",
      ISO3: "MUS",
      currency: "MUR",
    },
    {
      id: 43,
      name: "Макао",
      ISO3: "MAC",
      currency: "MOP",
    },
    {
      id: 126,
      name: "Малави",
      ISO3: "MWI",
      currency: "MWK",
    },
    {
      id: 32,
      name: "Малайзия",
      ISO3: "MYS",
      currency: "MYR",
    },
    {
      id: 135,
      name: "Мали",
      ISO3: "MLI",
      currency: "XOF",
    },
    {
      id: 53,
      name: "Мальта",
      ISO3: "MLT",
      currency: "EUR",
    },
    {
      id: 117,
      name: "Марокко",
      ISO3: "MAR",
      currency: "MAD",
    },
    {
      id: 92,
      name: "Маршалловы острова",
      ISO3: "MHL",
      currency: "USD",
    },
    {
      id: 50,
      name: "Мексика",
      ISO3: "MEX",
      currency: "MXN",
    },
    {
      id: 122,
      name: "Мозамбик",
      ISO3: "MOZ",
      currency: "MZN",
    },
    {
      id: 83,
      name: "Монако",
      ISO3: "MCO",
      currency: "EUR",
    },
    {
      id: 70,
      name: "Монголия",
      ISO3: "MNG",
      currency: "MNT",
    },
    {
      id: 97,
      name: "Мьянма",
      ISO3: "MMR",
      currency: "MMK",
    },
    {
      id: 121,
      name: "Намибия",
      ISO3: "NAM",
      currency: "NAD",
    },
    {
      id: 136,
      name: "Нигер",
      ISO3: "NER",
      currency: "XOF",
    },
    {
      id: 102,
      name: "Нигерия",
      ISO3: "NGA",
      currency: "NGN",
    },
    {
      id: 18,
      name: "Нидерланды",
      ISO3: "NLD",
      currency: "EUR",
    },
    {
      id: 34,
      name: "Новая Зеландия",
      ISO3: "NZL",
      currency: "NZD",
    },
    {
      id: 41,
      name: "Норвегия",
      ISO3: "NOR",
      currency: "NOK",
    },
    {
      id: 103,
      name: "ОАЭ",
      ISO3: "ARE",
      currency: "AED",
    },
    {
      id: 111,
      name: "Оман",
      ISO3: "OMN",
      currency: "OMR",
    },
    {
      id: 81,
      name: "Острова Теркси Кайкос",
      ISO3: "TCA",
      currency: "USD",
    },
    {
      id: 48,
      name: "Пакистан",
      ISO3: "PAK",
      currency: "PKR",
    },
    {
      id: 123,
      name: "Палестина, Государство Израиль",
      ISO3: "PSE",
      currency: "ILS",
    },
    {
      id: 75,
      name: "Панама",
      ISO3: "PAN",
      currency: "PAB",
    },
    {
      id: 78,
      name: "Папуа-Новая Гвинея",
      ISO3: "PNG",
      currency: "PGK",
    },
    {
      id: 57,
      name: "Перу",
      ISO3: "PER",
      currency: "PEN",
    },
    {
      id: 8,
      name: "Польша",
      ISO3: "POL",
      currency: "PLN",
    },
    {
      id: 66,
      name: "Португалия",
      ISO3: "PRT",
      currency: "EUR",
    },
    {
      id: 2,
      name: "Россия",
      ISO3: "RUS",
      currency: "RUB",
    },
    {
      id: 140,
      name: "Руанда",
      ISO3: "RWA",
      currency: "RWF",
    },
    {
      id: 59,
      name: "Румыния",
      ISO3: "ROU",
      currency: "RON",
    },
    {
      id: 110,
      name: "Саудовская Аравия",
      ISO3: "SAU",
      currency: "SAR",
    },
    {
      id: 88,
      name: "Северная Македония",
      ISO3: "MKD",
      currency: "MKD",
    },
    {
      id: 137,
      name: "Сенегал",
      ISO3: "SEN",
      currency: "XOF",
    },
    {
      id: 96,
      name: "Сент-Люсия",
      ISO3: "LCA",
      currency: "XCD",
    },
    {
      id: 36,
      name: "Сербия",
      ISO3: "SRB",
      currency: "RSD",
    },
    {
      id: 28,
      name: "Сингапур",
      ISO3: "SGP",
      currency: "SGD",
    },
    {
      id: 101,
      name: "Синт-Мартен",
      ISO3: "SXM",
      currency: "ANG",
    },
    {
      id: 63,
      name: "Словакия",
      ISO3: "SVK",
      currency: "EUR",
    },
    {
      id: 65,
      name: "Словения",
      ISO3: "SVN",
      currency: "EUR",
    },
    {
      id: 129,
      name: "Судан",
      ISO3: "SDN",
      currency: "SDG",
    },
    {
      id: 6,
      name: "США",
      ISO3: "USA",
      currency: "USD",
    },
    {
      id: 9,
      name: "Тайвань",
      ISO3: "TWN",
      currency: "TWD",
    },
    {
      id: 26,
      name: "Тайланд",
      ISO3: "THA",
      currency: "THB",
    },
    {
      id: 141,
      name: "Танзания",
      ISO3: "TZA",
      currency: "TZS",
    },
    {
      id: 142,
      name: "Того",
      ISO3: "TGO",
      currency: "XOF",
    },
    {
      id: 58,
      name: "Тринидади Тобаго",
      ISO3: "TTO",
      currency: "TTD",
    },
    {
      id: 118,
      name: "Тунис",
      ISO3: "TUN",
      currency: "TND",
    },
    {
      id: 37,
      name: "Турция",
      ISO3: "TUR",
      currency: "TRY",
    },
    {
      id: 138,
      name: "Уганда",
      ISO3: "UGA",
      currency: "UGX",
    },
    {
      id: 4,
      name: "Украина",
      ISO3: "UKR",
      currency: "UAH",
    },
    {
      id: 71,
      name: "Уругвай",
      ISO3: "URY",
      currency: "UYU",
    },
    {
      id: 99,
      name: "Фарерские острова",
      ISO3: "FRO",
      currency: "DKK",
    },
    {
      id: 25,
      name: "Филиппины",
      ISO3: "PHL",
      currency: "PHP",
    },
    {
      id: 39,
      name: "Финляндия",
      ISO3: "FIN",
      currency: "EUR",
    },
    {
      id: 72,
      name: "Фолклендские острова",
      ISO3: "FLK",
      currency: "FKP",
    },
    {
      id: 5,
      name: "Франция",
      ISO3: "FRA",
      currency: "EUR",
    },
    {
      id: 27,
      name: "Хорватия",
      ISO3: "HRV",
      currency: "HRK",
    },
    {
      id: 93,
      name: "Черногория",
      ISO3: "MNE",
      currency: "EUR",
    },
    {
      id: 69,
      name: "Чехия",
      ISO3: "CZE",
      currency: "CZK",
    },
    {
      id: 56,
      name: "Чили",
      ISO3: "CHL",
      currency: "CLP",
    },
    {
      id: 46,
      name: "Швейцария",
      ISO3: "CHE",
      currency: "CHF",
    },
    {
      id: 23,
      name: "Швеция",
      ISO3: "SWE",
      currency: "SEK",
    },
    {
      id: 45,
      name: "Шри-Ланка",
      ISO3: "LKA",
      currency: "LKR",
    },
    {
      id: 62,
      name: "Эквадор",
      ISO3: "ECU",
      currency: "USD",
    },
    {
      id: 61,
      name: "Эстония",
      ISO3: "EST",
      currency: "EUR",
    },
    {
      id: 114,
      name: "Южная Африка",
      ISO3: "ZAF",
      currency: "ZAR",
    },
    {
      id: 15,
      name: "Ямайка",
      ISO3: "JAM",
      currency: "JMD",
    },
    {
      id: 21,
      name: "Япония",
      ISO3: "JPN",
      currency: "JPY",
    },
  ];
  const dispatch: AppDispatch = useAppDispatch();
  const getCountryNames = () => {
    const countryNamesCode3 = Object.values(mockCountryData);

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
  const mobileBottomMenuToggleHandler = (): void => {
    setIsMobileBottomMenuClose(!isMobileBottomMenuClose);
  };
  const mobileNewsToggleHandler = (): void => {
    setIsMobileNewsClose(!isMobileNewsClose);
  };

  const widthScreen = document.body.clientWidth / 1.08;
  // const heightScreen = document.body.clientHeight;

  const options = {
    chart: {
      width: widthScreen,
      height: 670,
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
            if(document.body.clientWidth < 960) {
              mobileBottomMenuToggleHandler();
            }
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
      <div className="d-none d-lg-block">
        <Chevron
          onClick={newsToggleHandler}
          className={isNewsClose ? "chevron" : "chevron close"}
        >
          <img src={chevron} alt="toggle" />
        </Chevron>
      </div>
      {isMobileNewsClose && (
        <MapMobileNews
          isMobileNewsClose={isMobileNewsClose}
          mobileNewsToggleHandler={mobileNewsToggleHandler}
        />
      )}
      <div className="d-block d-lg-none">
        <Chevron
          onClick={mobileNewsToggleHandler}
          className={isMobileNewsClose ? "chevron mob" : "chevron mob close"}
        >
          <img src={chevron} alt="toggle" />
        </Chevron>
      </div>
      <div className="d-block d-lg-none">
        {mapMobCountyInfoIsOpen && (
          <MapMobBottomMenu
            isMobileBottomMenuClose={isMobileBottomMenuClose}
            mobileBottomMenuToggleHandler={mobileBottomMenuToggleHandler}
          />
        )}
      </div>
      <ActivityLeaders />
      <DeclineLeaders />
      <GrowthLeaders />
      <MapMacroStock />
      <MapFooterFilter />
    </div>
  );
};
export default MapHighchartsFC;
