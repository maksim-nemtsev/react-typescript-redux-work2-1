import React from "react";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";

interface Props {}

const mainPage: React.FC = (props: Props) => {
  return (
    <div>
      <NavigationMenu />
    </div>
  );
};

export default mainPage;
