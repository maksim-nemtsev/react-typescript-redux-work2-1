import "./AllRatings.css";
import styled from "styled-components";
import React from "react";
import { Progress } from "reactstrap";

const AllRatingsContainer = styled.section`
  width: 98%;
  height: 31.625rem;
  flex-grow: 0;
  padding: 1.875rem 2.5rem;
  border-radius: 8px;
  background-color: #fff;
`;
const AllRatingsTitle = styled.h4`
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
const AllRatingsDate = styled.p`
  font-family: ArticulatCF;
  font-size: 0.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #9faab3;
`;
const AllRatingsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;
const AllRatingsContentWrapper = styled.div`
  height: 24rem;
  overflow: auto;
  padding: 2.5rem 1.875rem 0;
`;
const AllRatingsName = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 1.25rem;
`;
const AllRatingsNameTitle = styled.span`
  font-family: ArticulatCF;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000b20;
`;
const AllRatingsNamePercent = styled.span`
  font-family: ArticulatCF;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #000b20;
`;
const AllRatingsProgress = styled.div`
  width: 40%;
`;

interface Props {}

const AllRatings = (props: Props) => {
  return (
    <AllRatingsContainer>
      <AllRatingsTitle>Assets</AllRatingsTitle>
      <AllRatingsDate>As of 5/31/2021</AllRatingsDate>
      <AllRatingsContentWrapper>
        <AllRatingsContent>
          <AllRatingsName>
            <AllRatingsNameTitle>Emerging Markets</AllRatingsNameTitle>
            <AllRatingsNamePercent>7.75%</AllRatingsNamePercent>
          </AllRatingsName>
          <AllRatingsProgress>
            <Progress value="25" />
          </AllRatingsProgress>
        </AllRatingsContent>
        <AllRatingsContent>
          <AllRatingsName>
            <AllRatingsNameTitle>Emerging Markets</AllRatingsNameTitle>
            <AllRatingsNamePercent>7.75%</AllRatingsNamePercent>
          </AllRatingsName>
          <AllRatingsProgress>
            <Progress value="25" />
          </AllRatingsProgress>
        </AllRatingsContent>
        <AllRatingsContent>
          <AllRatingsName>
            <AllRatingsNameTitle>Emerging Markets</AllRatingsNameTitle>
            <AllRatingsNamePercent>7.75%</AllRatingsNamePercent>
          </AllRatingsName>
          <AllRatingsProgress>
            <Progress value="25" />
          </AllRatingsProgress>
        </AllRatingsContent>
        <AllRatingsContent>
          <AllRatingsName>
            <AllRatingsNameTitle>Emerging Markets</AllRatingsNameTitle>
            <AllRatingsNamePercent>7.75%</AllRatingsNamePercent>
          </AllRatingsName>
          <AllRatingsProgress>
            <Progress value="25" />
          </AllRatingsProgress>
        </AllRatingsContent>
        <AllRatingsContent>
          <AllRatingsName>
            <AllRatingsNameTitle>Emerging Markets</AllRatingsNameTitle>
            <AllRatingsNamePercent>7.75%</AllRatingsNamePercent>
          </AllRatingsName>
          <AllRatingsProgress>
            <Progress value="25" />
          </AllRatingsProgress>
        </AllRatingsContent>
        <AllRatingsContent>
          <AllRatingsName>
            <AllRatingsNameTitle>Emerging Markets</AllRatingsNameTitle>
            <AllRatingsNamePercent>7.75%</AllRatingsNamePercent>
          </AllRatingsName>
          <AllRatingsProgress>
            <Progress value="25" />
          </AllRatingsProgress>
        </AllRatingsContent>
        <AllRatingsContent>
          <AllRatingsName>
            <AllRatingsNameTitle>Emerging Markets</AllRatingsNameTitle>
            <AllRatingsNamePercent>7.75%</AllRatingsNamePercent>
          </AllRatingsName>
          <AllRatingsProgress>
            <Progress value="25" />
          </AllRatingsProgress>
        </AllRatingsContent>
        <AllRatingsContent>
          <AllRatingsName>
            <AllRatingsNameTitle>Emerging Markets</AllRatingsNameTitle>
            <AllRatingsNamePercent>7.75%</AllRatingsNamePercent>
          </AllRatingsName>
          <AllRatingsProgress>
            <Progress value="25" />
          </AllRatingsProgress>
        </AllRatingsContent>
        <AllRatingsContent>
          <AllRatingsName>
            <AllRatingsNameTitle>Emerging Markets</AllRatingsNameTitle>
            <AllRatingsNamePercent>7.75%</AllRatingsNamePercent>
          </AllRatingsName>
          <AllRatingsProgress>
            <Progress value="25" />
          </AllRatingsProgress>
        </AllRatingsContent>
        <AllRatingsContent>
          <AllRatingsName>
            <AllRatingsNameTitle>Emerging Markets</AllRatingsNameTitle>
            <AllRatingsNamePercent>7.75%</AllRatingsNamePercent>
          </AllRatingsName>
          <AllRatingsProgress>
            <Progress value="25" />
          </AllRatingsProgress>
        </AllRatingsContent>
        <AllRatingsContent>
          <AllRatingsName>
            <AllRatingsNameTitle>Emerging Markets</AllRatingsNameTitle>
            <AllRatingsNamePercent>7.75%</AllRatingsNamePercent>
          </AllRatingsName>
          <AllRatingsProgress>
            <Progress value="25" />
          </AllRatingsProgress>
        </AllRatingsContent>
      </AllRatingsContentWrapper>
    </AllRatingsContainer>
  );
};

export default AllRatings;
