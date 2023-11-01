import React from "react";
import { styled } from "styled-components";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../recoil/atom";

export default function StoryButton() {
  const user = useRecoilValue(userState);
  return (
    <StoryButtonStyle>
      <ProfileImageStyle src={user.image} alt="프로필 이미지" />
    </StoryButtonStyle>
  );
}

const StoryButtonStyle = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: none;
  cursor: pointer;
  overflow: hidden;
  padding: 0;
`;

const ProfileImageStyle = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;
