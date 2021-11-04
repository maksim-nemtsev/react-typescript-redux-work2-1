import React, { useState } from "react";
import { useHistory } from "react-router";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { PortfolioCard } from "./PortfolioCard";
import "./PortfolioCards.css";

type CardInfo = {
  title: string;
  id: string;
};

const PortfolioCards = () => {
  const [modalFavorites, setModalFavorites] = useState(false);
  const history = useHistory();
  const [cardInfo] = useState<CardInfo[]>([
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

  const handleFavoritesModalOpen = () => {
    console.log("click card favorites")
    setModalFavorites(!modalFavorites)}

  return (
    <div className="portfolio-cards">
      {cardInfo.map((prev) => (
        <PortfolioCard
          key={prev.title}
          title={prev.title}
          id={prev.id}
          handleClick={() => handleNavigateToPreventive(prev.id, prev.title)}
          handleModalFavorites={() => handleFavoritesModalOpen()}
        />
      ))}<Modal isOpen={modalFavorites} toggle={handleFavoritesModalOpen}>
          <ModalBody className="modal-subscribe">
            <p className="modal-header__title">Подписка</p>
            <p className="modal-header__subtitle">Только для тарифа GOLD</p>
            <p className="modal-header__content">
            Подпишитесь на портфель «Warren Buffett» бесплатно, ведь у васесть тариф GOLD!
            </p>
          </ModalBody>
          <ModalFooter className="modal-footer__btn">
            <button className="modal-subscribe__btn">
            Подписаться бесплатно
            </button>
          </ModalFooter>
        </Modal>
    </div>
  );
};

export default PortfolioCards;
