import React from "react";
import { CardImg, CardText, CardBody, CardTitle } from "reactstrap";
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
        <CardTitle tag="h5">Card Title</CardTitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </CardText>
        <CardText>
          <small className="text-muted">5/31/2021</small>
        </CardText>
      </CardBody>
    </CardContainer>
  );
};

export default CardBlog;
