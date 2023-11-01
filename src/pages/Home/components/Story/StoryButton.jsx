import React from "react";
import { styled } from "styled-components";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../recoil/atom";
import { COLOR } from "../../../../utils";

export default function StoryButton(props) {
  const { onClickHandler } = props;
  const user = useRecoilValue(userState);
  return (
    <StoryButtonStyle onClick={onClickHandler}>
      <ProfileImageStyle src={user.image} alt="프로필 이미지" />
    </StoryButtonStyle>
  );
}

const StoryButtonStyle = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 2px solid ${COLOR.borderOrangeColor};
  cursor: pointer;
  overflow: hidden;
  padding: 0;
  box-sizing: content-box;
`;

const ProfileImageStyle = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;
