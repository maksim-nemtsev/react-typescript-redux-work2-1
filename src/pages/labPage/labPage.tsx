import React from "react";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";

type Props = {
  auth: boolean;
};

const labPage = (props: Props) => {
  return (
    <div>
      <NavigationMenu auth={props.auth} />
      <h2 className="lab__title">LABARATORY</h2>
    </div>
  );
};

export default labPage;
