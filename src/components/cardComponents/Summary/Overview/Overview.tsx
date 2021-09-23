import React from "react";
import { Col, Row } from "reactstrap";
import styled from "styled-components";

const OverviewTitle = styled.h4`
  display: inline-block;
  margin-bottom: 2.5rem;
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
const OverviewSubTitle = styled.h4`
  display: inline-block;
  margin-bottom: 1rem;
  display: inline-block;
  font-family: ArticulatCF;
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000b20;
`;
const OverviewDescription = styled.h4`
  display: inline-block;
  margin-bottom: 2.5rem;
  margin-right: 2.5rem;
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

const OverviewContainer = styled.div`
  width: 100%;
  /* height: 31.625rem; */
  flex-grow: 0;
  margin: 2.5rem 2.5rem 5rem 0;
  padding: 1.875rem 0 2.5rem 2.1rem;
  border-radius: 8px;
  background-color: #fff;
`;

const OverviewOverflow = styled.div`
  height: 24.3rem;
  overflow: auto;
`;

interface Props {}

const Overview = (props: Props) => {
  return (
    <OverviewContainer>
      <OverviewTitle>Overview</OverviewTitle>
      <OverviewOverflow>
        <Col>
          <OverviewSubTitle>Objective</OverviewSubTitle>
          <OverviewDescription>Seeks capital appreciation.</OverviewDescription>
        </Col>
        <Col>
          <OverviewSubTitle>Strategy</OverviewSubTitle>
          <OverviewDescription>
            Normally investing at least 80% of assets in blue chip companies
            (companies that, in FMR's view, are well-known, well-established and
            well-capitalized), which generally have large or medium market
            capitalizations. Investing in companies that FMR believes are
            undervalued in the marketplace in relation to factors such as
            assets, sales, earnings, growth potential, or cash flow, or in
            relation to securities of other companies in the same industry
            (stocks of these companies are often called "value" stocks).
            Normally investing primarily in common stocks.
          </OverviewDescription>
        </Col>
        <Col>
          <OverviewSubTitle>Risk</OverviewSubTitle>
          <OverviewDescription>
            Stock markets, especially foreign markets, are volatile and can
            decline significantly in response to adverse issuer, political,
            regulatory, market, or economic developments. Foreign securities are
            subject to interest rate,
          </OverviewDescription>
        </Col>
        <Col>
          <OverviewSubTitle>Risk</OverviewSubTitle>
          <OverviewDescription>
            Stock markets, especially foreign markets, are volatile and can
            decline significantly in response to adverse issuer, political,
            regulatory, market, or economic developments. Foreign securities are
            subject to interest rate,
          </OverviewDescription>
        </Col>
        <Col>
          <OverviewSubTitle>Risk</OverviewSubTitle>
          <OverviewDescription>
            Stock markets, especially foreign markets, are volatile and can
            decline significantly in response to adverse issuer, political,
            regulatory, market, or economic developments. Foreign securities are
            subject to interest rate,
          </OverviewDescription>
        </Col>
        <Col>
          <OverviewSubTitle>Risk</OverviewSubTitle>
          <OverviewDescription>
            Stock markets, especially foreign markets, are volatile and can
            decline significantly in response to adverse issuer, political,
            regulatory, market, or economic developments. Foreign securities are
            subject to interest rate,
          </OverviewDescription>
        </Col>
        <Col>
          <OverviewSubTitle>Risk</OverviewSubTitle>
          <OverviewDescription>
            Stock markets, especially foreign markets, are volatile and can
            decline significantly in response to adverse issuer, political,
            regulatory, market, or economic developments. Foreign securities are
            subject to interest rate,
          </OverviewDescription>
        </Col>
        <Col>
          <OverviewSubTitle>Risk</OverviewSubTitle>
          <OverviewDescription>
            Stock markets, especially foreign markets, are volatile and can
            decline significantly in response to adverse issuer, political,
            regulatory, market, or economic developments. Foreign securities are
            subject to interest rate,
          </OverviewDescription>
        </Col>
      </OverviewOverflow>
    </OverviewContainer>
  );
};

export default Overview;
