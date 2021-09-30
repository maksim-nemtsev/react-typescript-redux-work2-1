import React from "react";
import {
  Card,
  Button,
  CardBody,
  CardTitle,
  Badge,
  ButtonGroup,
} from "reactstrap";
import growSVG from "../../assets/svg/growth-orientedSVG.svg";
import percentSVG from "../../assets/svg/percent.svg";
import favoritesSVG from "../../assets/svg/favorites.svg";
import notificationSVG from "../../assets/svg/notification.svg";
import arrowGrowthSVG from "../../assets/svg/arrow-growth.svg";
import planSVG from "../../assets/svg/plan-ws.svg";
import autoSVG from "../../assets/svg/auto.svg";
import industrythSVG from "../../assets/svg/industry.svg";
import financeSVG from "../../assets/svg/finance.svg";
import graf1 from "../../assets/img/graf1.jpg";
import countryBrsSVG from "../../assets/svg/country/brs.svg";
import countryEnglandSVG from "../../assets/svg/country/england.svg";
import countryGrecSVG from "../../assets/svg/country/grec.svg";

type CardInfo = {
  title: string;
  key: string;
  id: string;
  handleClick: () => void;
};

export const PortfolioCard = (props: CardInfo) => {
  return (
    <Card onClick={() => props.handleClick()} className="portfolio-card pb-0">
      <CardBody className="d-flex pt-0 justify-content-between">
        <div className="card-header__left">
          <img className="card-header__svg" src={growSVG} alt="growth" />
          <img className="card-header__svg" src={percentSVG} alt="percentSVG" />
          <img className="card-header__svg" src={growSVG} alt="growth" />
          <span className="card-header-count">5.0</span>
        </div>
        <div className="card-header__right">
          <img
            className="card-header__favorites"
            src={favoritesSVG}
            alt="favorites"
          />
          <img
            className="card-header__notification"
            src={notificationSVG}
            alt="notification"
          />
          <img
            className="card-header__notification--plan"
            src={planSVG}
            alt="notification"
          />
        </div>
      </CardBody>
      <CardBody className="pt-0">
        <CardTitle className="" tag="h5">
          <Badge className="badge cards" color="primary">
            Big
          </Badge>
          {props.title}
        </CardTitle>
        <div className="card-body-graf">
          <div className="card-body-graf--left">
            <div className="d-flex p-0">
              <div className="banks">
                <span className="banks-name">SBERP</span>
              </div>
              <div>
                <span className="banks-count">5.00%</span>
              </div>
            </div>
            <div className="d-flex p-0">
              <div className="banks">
                <span className="banks-name">SBERP</span>
              </div>
              <div>
                <span className="banks-count">5.00%</span>
              </div>
            </div>
            <div className="d-flex p-0">
              <div className="banks">
                <span className="banks-name">SBERP</span>
              </div>
              <div>
                <span className="banks-count">5.00%</span>
              </div>
            </div>
            <div className="d-flex p-0">
              <div className="banks">
                <span className="banks-name">SBERP</span>
              </div>
              <div>
                <span className="banks-count">5.00%</span>
              </div>
            </div>
            <div className="d-flex p-0">
              <div className="banks">
                <span className="banks-name">SBERP</span>
              </div>
              <div>
                <span className="banks-count">5.00%</span>
              </div>
            </div>
            <div className="d-flex p-0">
              <div className="banks">
                <span className="banks-name">SBERP</span>
              </div>
              <div>
                <span className="banks-count">5.00%</span>
              </div>
            </div>
            <div className="d-flex p-0">
              <div className="banks">
                <span className="banks-name">SBERP</span>
              </div>
              <div>
                <span className="banks-count">5.00%</span>
              </div>
            </div>
          </div>
          <div className="card-body-graf--right">
            <img src={graf1} width="270px" height="166px" alt="graf" />
          </div>
        </div>
        <Button size="sm" color="light" className="m-1">
          more
        </Button>
      </CardBody>
      <CardBody className="d-flex justify-content-between align-items-center pt-0">
        <ButtonGroup size="sm">
          <Button id="card-btn-1" outline color="secondary">
            10Y
          </Button>
          <Button id="card-btn-2" outline color="secondary">
            Y
          </Button>
          <Button id="card-btn-3" outline color="secondary">
            D
          </Button>
        </ButtonGroup>
        <span className="growth-count">
          <img
            width="16px"
            height="16px"
            className="growth-img"
            src={arrowGrowthSVG}
            alt="growth"
          />
          35.7%
        </span>
      </CardBody>
      <CardBody className="d-flex pt-0 pb-0 justify-content-between">
        <div className="card-header__left">
          <img className="card-header__svg" src={countryBrsSVG} alt="country" />
          <img
            className="card-header__svg"
            src={countryEnglandSVG}
            alt="country"
          />
          <img
            className="card-header__svg"
            src={countryGrecSVG}
            alt="country"
          />
          <span className="card-header-count">+7</span>
        </div>
        <div className="card-header__right">
          <img className="card-header__svg" src={autoSVG} alt="country" />
          <img className="card-header__svg" src={industrythSVG} alt="country" />
          <img className="card-header__svg" src={financeSVG} alt="country" />
          <span className="card-header-count">+7</span>
        </div>
      </CardBody>
    </Card>
  );
};
