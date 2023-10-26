import React from "react";
import { styled } from "styled-components";
import Header from "./Header";
import Content from "./Content";
import { COLOR } from "../../utils";

export default function PostItem(props) {
  const { post, hasFollowButton, isMoveToContentPage, onModalHandler } = props;

  return (
    <PostStyle>
      <Header
        post={post}
        hasFollowButton={hasFollowButton}
        onModalHandler={onModalHandler}
      />
      <Content post={post} isMoveToContentPage={isMoveToContentPage} />
    </PostStyle>
  );
}

const PostStyle = styled.article`
  width: 358px;
  background-color: ${COLOR.bgPrimaryColor};
  margin-top: 20px;
  margin-bottom: 20px;
`;
