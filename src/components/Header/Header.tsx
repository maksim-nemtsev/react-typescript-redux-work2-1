import React from "react";
import styled from "styled-components";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

const Header = styled.header`
  position: fixed;
  bottom: 0;
  min-width: 22.5rem;
  height: 3.5rem;
  box-shadow: 0 -4px 20px 0 rgba(0, 0, 0, 0.06);
  background-color: #fff;
`;

type Props = {
  auth: boolean;
};

const MobileHeader = (props: Props) => {
  return (
    <Header>
      <NavigationMenu auth={props.auth} />
    </Header>
  );
};

export default MobileHeader;
