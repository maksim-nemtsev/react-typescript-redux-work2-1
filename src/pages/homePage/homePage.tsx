import React from "react";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";

interface Props {}

const homePage: React.FC = (props: Props) => {
  return (
    <div>
      <NavigationMenu />
    </div>
  );
};

export default homePage;
