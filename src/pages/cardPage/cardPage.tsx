import React from "react";
import { useHistory, useParams } from "react-router";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import "./cardPage.css";
import arrowBack from "../../assets/svg/card-page/arrow-left.svg";
import { DropdownItem } from "reactstrap";
import Rating from "../../components/UI/rating/rating";
import ProgressBar from "../../components/UI/ProgressBar/ProgressBar";
import Tabs from "../../components/UI/Tabs/Tabs";
import styled from "styled-components";
import favoritesSVG from "../../assets/svg/favorites.svg";
import notificationSVG from "../../assets/svg/notification.svg";

const OverviewWater = styled.p`
  display: block;
  font-family: ArticulatCF;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #9faab3;
`;

interface Props {}

type Params = {
  id: string;
};

export const CardPage = (props: Props) => {
  const { id } = useParams<Params>();
  const title = id.split("-");
  const history = useHistory();

  const backHandler = (): void => {
    history.goBack();
  };

  return (
    <div className="App-wrapper">
      <div className="App-div">
        <NavigationMenu />
        <div className="card-contant">
          <div className="card-contant_title">
            <img
              onClick={backHandler}
              className="card-page__svg"
              src={arrowBack}
              alt="back"
            />
            <h2 className="title">{title[0]}</h2>
            <svg
              className="card-contant__svg"
              width="39"
              height="29"
              viewBox="0 0 39 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="39"
                height="29"
              >
                <rect width="39" height="29" rx="4" fill="#C4C4C4" />
              </mask>
              <g mask="url(#mask0)">
                <rect
                  width="39"
                  height="29"
                  rx="4"
                  fill="url(#paint0_linear)"
                />
                <g opacity="0.3" filter="url(#filter0_f)">
                  <rect
                    x="9.94336"
                    y="-11"
                    width="48"
                    height="6.12576"
                    transform="rotate(30 9.94336 -11)"
                    fill="white"
                  />
                </g>
                <g opacity="0.3" filter="url(#filter1_f)">
                  <rect
                    x="3.5127"
                    y="-1"
                    width="50.1715"
                    height="1.02545"
                    transform="rotate(30 3.5127 -1)"
                    fill="white"
                  />
                </g>
                <path
                  d="M20.208 9.2L18.15 16.788L15.798 9.2H14.314L11.962 16.788L9.904 9.2H8.364L11.192 19H12.578L15.056 11.398L17.534 19H18.92L21.748 9.2H20.208ZM26.9739 13.512L25.5879 13.232C24.5379 13.022 24.1319 12.504 24.1319 11.818C24.1319 11.104 24.6919 10.306 26.0919 10.306C27.4079 10.306 28.0379 10.936 28.1779 11.804H29.7039C29.5079 10.096 28.2199 9.074 26.0919 9.074C23.8799 9.074 22.6199 10.222 22.6199 11.776C22.6199 13.372 23.6979 14.1 25.3359 14.422L26.7079 14.688C27.7439 14.898 28.4299 15.276 28.4299 16.27C28.4299 17.18 27.6599 17.88 26.2179 17.88C24.6919 17.88 24.1039 17.026 23.9359 16.032H22.4099C22.5639 17.908 23.8659 19.126 26.2039 19.126C28.4439 19.126 29.9699 18.062 29.9699 16.27C29.9699 14.618 28.9479 13.904 26.9739 13.512Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f"
                  x="3.88086"
                  y="-14"
                  width="50.6321"
                  height="35.3051"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="1.5"
                    result="effect1_foregroundBlur"
                  />
                </filter>
                <filter
                  id="filter1_f"
                  x="1"
                  y="-3"
                  width="47.9625"
                  height="29.9738"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="1"
                    result="effect1_foregroundBlur"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear"
                  x1="0"
                  y1="0"
                  x2="42.0728"
                  y2="5.50171"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFDE74" />
                  <stop offset="1" stopColor="#FFB000" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              className="card-contant__svg"
              width="37"
              height="29"
              viewBox="0 0 37 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="37" height="29" rx="4" fill="#887CC9" />
              <path
                d="M14.244 13.624C15.126 13.316 15.644 12.574 15.644 11.65C15.644 10.208 14.678 9.2 12.578 9.2H8.784V19H12.662C15.126 19 16.274 17.922 16.274 16.172C16.274 14.94 15.532 13.974 14.244 13.624ZM10.254 10.432H12.606C13.6 10.432 14.104 10.964 14.104 11.748C14.104 12.588 13.572 13.19 12.62 13.19H10.254V10.432ZM12.648 17.754H10.254V14.352H12.634C14.104 14.352 14.692 15.164 14.692 16.116C14.692 17.054 14.132 17.754 12.648 17.754ZM17.6981 9.074V10.278H19.1121V9.074H17.6981ZM17.6981 11.72V19H19.1121V11.72H17.6981ZM25.8165 11.692V12.938C25.4385 12.21 24.5845 11.65 23.5065 11.65C22.0645 11.65 20.3285 12.756 20.3285 15.36C20.3285 17.992 22.0645 19.084 23.5345 19.084C24.8365 19.084 25.5645 18.272 25.8165 17.642V18.902C25.8165 20.358 25.0325 20.904 23.6745 20.904C22.6525 20.904 21.9945 20.526 21.6165 20.036L20.7345 20.61C21.2245 21.506 22.3725 22.08 23.8005 22.08C25.2565 22.08 27.2305 21.506 27.2305 18.902V11.692H25.8165ZM23.8145 17.922C22.7085 17.922 21.7285 17.138 21.7285 15.36C21.7285 13.582 22.7085 12.812 23.8145 12.812C24.9205 12.812 25.8865 13.596 25.8865 15.36C25.8865 17.11 24.9205 17.922 23.8145 17.922Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="card-contant_options">
            <div className="card-content__favor">
              <img
                className="card-content__img"
                src={favoritesSVG}
                alt="favor"
              />
            </div>
            <span className="m-2">Favourites</span>
            <div className="card-content__sub">
              <img
                className="card-content__img"
                src={notificationSVG}
                alt="sub"
              />
            </div>
            <span className="m-2">Favourites</span>
          </div>
        </div>
      </div>
      <div className="Perfomance">
        <span className="Perfomance__title">Snapchot & Perfomance</span>
        <div className="perfomance__content">
          <div className="Perfomance__rating">
            <div className="Perfomance__stars">
              <span>Overall Rating</span>
              <Rating />
            </div>

            <div className="Perfomance__info"></div>
          </div>

          <div className="Perfomance__progress">
            <div className="Perfomance__cicle">
              <ProgressBar />
            </div>

            <div className="Perfomance__info">
              <span>Overall Rating</span>
            </div>
          </div>

          <div className="Perfomance__progress">
            <div className="Perfomance__cicle">
              <ProgressBar />
            </div>

            <div className="Perfomance__info">
              <span>Overall Rating</span>
            </div>
          </div>

          <div className="Perfomance__progress">
            <div className="Perfomance__cicle">
              <ProgressBar />
            </div>

            <div className="Perfomance__info">
              <span>Overall Rating</span>
            </div>
          </div>
        </div>
        <DropdownItem divider />
        <div className="Perfomance__footer">
          <div className="Perfomance__footer-onfo">
            <span className="Perfomance__years">YTD(Daily)*</span>
            <span className="Perfomance__percent">+17.26%</span>
          </div>
          <div className="Perfomance__footer-onfo">
            <span className="Perfomance__years">1YRS</span>
            <span className="Perfomance__percent">+17.26%</span>
          </div>
          <div className="Perfomance__footer-onfo">
            <span className="Perfomance__years">3YRS</span>
            <span className="Perfomance__percent">+17.26%</span>
          </div>
          <div className="Perfomance__footer-onfo">
            <span className="Perfomance__years">5YRS</span>
            <span className="Perfomance__percent">+17.26%</span>
          </div>
          <div className="Perfomance__footer-onfo">
            <span className="Perfomance__years">5YRS</span>
            <span className="Perfomance__percent">+17.26%</span>
          </div>
        </div>
      </div>
      <div className="card-navigation">
        <div className="nav card-page"></div>
      </div>
      <div className="App-div">
        <Tabs />
      </div>
      <OverviewWater>© World Screener 2021</OverviewWater>
    </div>
  );
};
