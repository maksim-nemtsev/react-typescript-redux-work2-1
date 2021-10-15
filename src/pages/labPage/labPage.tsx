import React from "react";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";

type Props = {
  userTarrifId: number;
};

const labPage = (props: Props) => {
  return (
    <div>
      <NavigationMenu userTarrifId={props.userTarrifId} />
      <h2 className="lab__title">LABARATORY</h2>
    </div>
  );
};

export default labPage;
