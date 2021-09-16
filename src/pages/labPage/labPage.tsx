import React from "react";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";

interface Props {}

const labPage: React.FC = (props: Props) => {
  return (
    <div>
      <NavigationMenu />
      <h2 className="lab__title">LABARATORY</h2>
    </div>
  );
};

export default labPage;
