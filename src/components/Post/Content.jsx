import React from "react";
import { styled } from "styled-components";
import Buttons from "./Buttons";
import { COLOR } from "../../utils";
import { FONT_SIZE } from "../../utils";
import { AddAPIURLImage } from "../../utils/function";

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
      {!!image && (
        <ContentImageStyle src={AddAPIURLImage(image)} alt="포스트 이미지" />
      )}
      <Buttons
        postId={id}
        hearted={hearted}
        heartCount={heartCount}
        commentCount={commentCount}
      />
      <DateStyle>{!!updatedAt ? updatedAt : createdAt}</DateStyle>
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
  height: 228px;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 16px;
`;

const DateStyle = styled.div`
  color: ${COLOR.fontPrimaryColor};
  font-size: ${FONT_SIZE.small};
`;
