import React from "react";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";

type Props = {
  userTarrifId: number;
};

const homePage = (props: Props) => {
  return (
    <div>
      <NavigationMenu userTarrifId={props.userTarrifId} />
    </div>
  );
};

export default homePage;
