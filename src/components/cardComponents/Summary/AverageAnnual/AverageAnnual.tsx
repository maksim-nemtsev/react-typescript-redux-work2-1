import React from "react";
import styled from "styled-components";
import AverageCol from "../../../HighchartsComponents/AverageCol";

const AverageAnnualContainer = styled.div`
  margin: 2.5rem 0;
  padding: 1.875rem 2.5rem;
  border-radius: 8px;
  background-color: #fff;
`;

const AverageAnnualTitle = styled.h4`
  display: inline-block;
  font-family: ArticulatCF;
  font-size: 1.375rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000b20;
  margin-bottom: 2.5rem;
`;

const AverageAnnualSubTitle = styled.p`
  font-family: ArticulatCF;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000b20;
`;

const AverageAnnual = () => {
  return (
    <AverageAnnualContainer>
      <AverageAnnualTitle>Average Annual Total Returns</AverageAnnualTitle>
      <AverageAnnualSubTitle>123 Companies</AverageAnnualSubTitle>
      <AverageCol />
    </AverageAnnualContainer>
  );
};

export default AverageAnnual;
