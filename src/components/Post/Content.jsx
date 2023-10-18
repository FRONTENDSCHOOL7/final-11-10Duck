import React from "react";
import { styled } from "styled-components";
import Buttons from "./Buttons";

export default function Content(props) {
  const { post } = props;
  const {
    id,
    content,
    image,
    createdAt,
    updatedAt,
    hearted,
    heartCount,
    commentCount,
  } = post;
  return (
    <ContentStyle>
      <ContentTextStyle>{content}</ContentTextStyle>
      {!!image.length && <ContentImageStyle src={image} alt="포스트 이미지" />}
      <Buttons
        hearted={hearted}
        heartCount={heartCount}
        commentCount={commentCount}
      />
      <DateStyle>{!!updatedAt.length ? updatedAt : createdAt}</DateStyle>
    </ContentStyle>
  );
}

const ContentStyle = styled.section`
  font-size: 14px;
  margin-left: 54px;
`;

const ContentTextStyle = styled.p`
  margin-top: 16px;
`;

const ContentImageStyle = styled.img`
  width: 304px;
  height: 260px;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 16px;
`;

const DateStyle = styled.div`
  color: var(--font-primary-color);
  font-size: 10px;
`;
