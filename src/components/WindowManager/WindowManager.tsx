import React from "react";
import { useAppSelector } from "../../hooks/hooks";

const WindowManager = () => {
  const stateLeadersIsFetching = useAppSelector((state) => console.log(state));
  const IndustriesInfoIsOpen = useAppSelector((state) => state);

  return <div></div>;
};

export default WindowManager;
