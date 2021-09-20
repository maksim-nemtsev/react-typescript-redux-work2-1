import React, { useState } from "react";
import { useHistory } from "react-router";
import { PortfolioCard } from "./PortfolioCard";
import "./PortfolioCards.css";

interface Props {}

type CardInfo = {
  title: string;
  id: string;
};

const PortfolioCards = (props: Props) => {
  const history = useHistory();
  const [cardInfo, setCardInfo] = useState<CardInfo[]>([
    { title: "Уоррен Баффет", id: "8" },
    { title: "Портфель", id: "7" },
    { title: "Джордж Сорос", id: "6" },
    { title: "Рэй Далио", id: "5" },
    { title: "Портфель2", id: "4" },
    { title: "Pontoa", id: "3" },
    { title: "Portal", id: "2" },
    { title: "Berço", id: "1" },
  ]);

  const handleNavigateToPreventive = (id: string, title: string) => {
    history.push(`/portfolio/${title}-${id}`);
  };

  return (
    <div className="portfolio-cards">
      {cardInfo.map((prev) => (
        <PortfolioCard
          key={prev.title}
          title={prev.title}
          id={prev.id}
          handleClick={() => handleNavigateToPreventive(prev.id, prev.title)}
        />
      ))}
    </div>
  );
};

export default PortfolioCards;
