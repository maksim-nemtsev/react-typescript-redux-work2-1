import React from "react";
import { CardImg, CardBody } from "reactstrap";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 18.125rem;
  height: 29.75rem;
  flex-grow: 0;
  margin: 2.5rem 0;
  padding: 0 0 1.25rem;
  border-radius: 8px;
  background-color: #fff;
`;

const CardBlogTitle = styled.h4`
  display: inline-block;
  margin-bottom: 2.4rem;
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

const CardBlogText = styled.p`
  font-family: ArticulatCF;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #9faab3;
`;

const CardBlogDate = styled.span`
  display: inline-block;
  margin-bottom: 1.25rem;
  font-family: ArticulatCF;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #9faab3;
`;

type CardBlogType = {
  key: string;
  idBlog: string;
  src: string;
  handleClick: () => void;
};

const CardBlog = (props: CardBlogType) => {
  return (
    <CardContainer onClick={() => props.handleClick()} className="blog-card">
      <CardImg top width="100%" src={props.src} alt="Card image cap" />
      <CardBody>
        <CardBlogTitle>Card Title</CardBlogTitle>
        <CardBlogText>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </CardBlogText>
        <CardBlogDate>5/31/2021</CardBlogDate>
      </CardBody>
    </CardContainer>
  );
};

export default CardBlog;
