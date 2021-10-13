import React from "react";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";

type Props = {
  auth: boolean;
};

const homePage = (props: Props) => {
  return (
    <div>
      <NavigationMenu auth={props.auth} />
    </div>
  );
};

export default homePage;
