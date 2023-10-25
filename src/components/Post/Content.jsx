import React from "react";
import { styled } from "styled-components";
import Buttons from "./Buttons";
import { COLOR } from "../../utils";
import { FONT_SIZE } from "../../utils";
import { AddAPIURLImage } from "../../utils/function";
import { useNavigate } from "react-router-dom";

export default function Content(props) {
  const { post, isMoveToContentPage } = props;

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

  const navigate = useNavigate();

  return (
    <ContentStyle isMoveToContentPage={isMoveToContentPage}>
      <div
        onClick={() => {
          if (isMoveToContentPage) {
            navigate(`/post/${id}`, {
              state: { authorId: post.author._id },
            });
          }
        }}
      >
        <ContentTextStyle>{content}</ContentTextStyle>
        {!!image && (
          <ContentImageStyle src={AddAPIURLImage(image)} alt="포스트 이미지" />
        )}
      </div>
      <Buttons
        postId={id}
        authorId={post.author._id}
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
  cursor: ${(props) => (props.isMoveToContentPage ? "pointer" : "")};
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
