import "./Overview.css";
import React from "react";
import styled from "styled-components";

const OverviewTitle = styled.h4`
  font-family: ArticulatCF;
  font-size: 1.375rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000b20;
`;

const Overview = () => {
  return (
    <div>
      <OverviewTitle>Overview</OverviewTitle>
    </div>
  );
};

export default Overview;
