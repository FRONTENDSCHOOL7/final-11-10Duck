import React from "react";
import { styled } from "styled-components";
import { COLOR } from "../../../utils";
import { FONT_SIZE } from "../../../utils";

import MoreButton from "../../../assets/icon/icon-more-vertical.png";
import ProfileImage from "../../../assets/basic-profile-img.png";

export default function Comment(props) {
  return (
    <CommentContainerStyle>
      <CommentHeaderStyle>
        <UserInfoContainerStyle>
          <ProfileImageStyle src={ProfileImage} alt="프로필 이미지" />
          <UserNameStyle>서귀포시 무슨 농장</UserNameStyle>
          <TimeStampStyle>· 5분 전</TimeStampStyle>
        </UserInfoContainerStyle>
        <MoreButtonStyle>
          <ButtonImage src={MoreButton} alt="더보기 버튼" />
        </MoreButtonStyle>
      </CommentHeaderStyle>
      <CommentStyle>게시글 답글 ~~ !! 최고최고</CommentStyle>
    </CommentContainerStyle>
  );
}

const CommentContainerStyle = styled.div`
  margin-bottom: 16px;
`;

const CommentHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserInfoContainerStyle = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImageStyle = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  margin-right: 12px;
`;
const UserNameStyle = styled.div`
  color: ${COLOR.fontDarkColor};
  font-size: ${FONT_SIZE.large};
  margin-right: 6px;
`;

const TimeStampStyle = styled.div`
  font-size: ${FONT_SIZE.small};
  color: ${COLOR.fontPrimaryColor};
`;

const CommentStyle = styled.div`
  color: ${COLOR.fontDarkGrayColor};
  font-size: ${FONT_SIZE.large};
  margin-left: 48px;
  margin-top: 16px;
`;

const MoreButtonStyle = styled.button`
  border: none;
  background-color: transparent;
`;

const ButtonImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;
