import React from "react";
import styled from "styled-components";
import HighchartsPolar from "../../../HighchartsComponents/HighchartsPolar";

const ContainerExecutive = styled.div`
  width: 33.75rem;
  margin: 2.5rem 0;
  padding: 1.875rem;
  border-radius: 8px;
  background-color: #fff;
`;

const AnalitycsTitle = styled.h4`
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

const Executive = () => {
  return (
    <ContainerExecutive>
      <AnalitycsTitle>Executive</AnalitycsTitle>
      <HighchartsPolar />
    </ContainerExecutive>
  );
};

export default Executive;
