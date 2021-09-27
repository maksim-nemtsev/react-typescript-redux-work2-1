import React, { useState } from "react";
import blog1 from "../../assets/img/blog1.jpg";
import blog2 from "../../assets/img/blog2.jpg";
import blog3 from "../../assets/img/blog3.jpg";
import CardBlog from "./CardBlog/CardBlog";
import styled from "styled-components";
import { useHistory } from "react-router";

const BlogContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  cursor: pointer;
`;

type CardInfo = {
  idBlog: string;
  img: string;
};

export type Params = {
  idBlog: string;
  title: string;
  id: string;
};

const Blog = () => {
  const history = useHistory();
  const [cardInfo] = useState<CardInfo[]>([
    { idBlog: "8", img: blog1 },
    { idBlog: "7", img: blog2 },
    { idBlog: "6", img: blog3 },
    { idBlog: "5", img: blog1 },
    { idBlog: "4", img: blog2 },
    { idBlog: "3", img: blog3 },
    { idBlog: "2", img: blog1 },
    { idBlog: "1", img: blog2 },
  ]);
  const handleBlog = (id: string) => {
    const title = id.split("-");

    history.push(`/portfolio/${title}-${id}/blog/${id}`);
  };

  return (
    <BlogContainer>
      {cardInfo.map((card) => (
        <CardBlog
          key={card.idBlog}
          src={card.img}
          idBlog={card.idBlog}
          handleClick={() => handleBlog(card.idBlog)}
        />
      ))}
    </BlogContainer>
  );
};

export default Blog;
