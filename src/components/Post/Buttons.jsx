import React, { useState } from "react";
import { styled } from "styled-components";

import Heart from "../../imgs/icon-heart.png";
import ActiveHeart from "../../imgs/icon-heart-active.png";
import Comment from "../../imgs/icon-message-circle.png";

export default function Buttons(props) {
  const { hearted, heartCount, commentCount } = props;
  const [heartSrc, setHeartSrc] = useState(hearted ? ActiveHeart : Heart);

  /**
   * 좋아요 버튼 클릭시 토글링하는 정도, 좋아요 버튼 기능은 안들어가있음
   */
  const toggleHeartButton = () => {
    if (heartSrc === Heart) {
      setHeartSrc(ActiveHeart);
    } else {
      setHeartSrc(Heart);
    }
  };

  /**
   * 댓글 함수
   */
  const writeComment = () => {};

  return (
    <ButtonContainerStyle>
      <ButtonStyle onClick={toggleHeartButton}>
        <ButtonIconStyle src={heartSrc} alt="좋아요 버튼의 하트 이미지" />
        <CommentCountStyle>{heartCount}</CommentCountStyle>
      </ButtonStyle>
      <ButtonStyle>
        <ButtonIconStyle src={Comment} alt="좋아요 버튼의 하트 이미지" />
        <CommentCountStyle>{commentCount}</CommentCountStyle>
      </ButtonStyle>
    </ButtonContainerStyle>
  );
}

const ButtonContainerStyle = styled.section`
  display: flex;
  margin-top: 12px;
  margin-bottom: 16px;
`;

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  margin: 0;
  margin-right: 16px;
  padding: 0;
`;

const ButtonIconStyle = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;

const CommentCountStyle = styled.div`
  color: var(--font-primary-color);
  font-size: 12px;
  margin-left: 6px;
`;
