import React from "react";
import PortfolioPageNav from "../../components/App/PortfolioPageNav/PortfolioPageNav";
import PortfolioCards from "../../components/Cards/PortfolioCards";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import "./portfolioPage.css";

const portfolioPage: React.FC = () => {
  return (
    <div>
      <NavigationMenu />
      <h2 className="portfolio__title">HQ FINANCE PORTFOLIO</h2>
      <PortfolioPageNav />
      <PortfolioCards />
    </div>
  );
};

export default portfolioPage;
