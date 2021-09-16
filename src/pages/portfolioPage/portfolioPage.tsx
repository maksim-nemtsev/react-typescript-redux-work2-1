import React from "react";
import PortfolioPageNav from "../../components/App/PortfolioPageNav/PortfolioPageNav";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import "./portfolioPage.css";

interface Props {}

const portfolioPage: React.FC = (props: Props) => {
  return (
    <div>
      <NavigationMenu />
      <h2 className="portfolio__title">HQ FINANCE PORTFOLIO</h2>
      <PortfolioPageNav />
    </div>
  );
};

export default portfolioPage;
