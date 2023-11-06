import React from "react";
import { styled } from "styled-components";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../recoil/atom";
import { COLOR } from "../../../../utils";

export default function StoryButton(props) {
  const { story, onClickHandler, hasButton } = props;
  const user = useRecoilValue(userState);
  return (
    <StoryButtonStyle onClick={onClickHandler}>
      <ProfileImageStyle
        src={story ? story.userImage : user.image}
        alt="프로필 이미지"
      />
      {hasButton && <PlusIconStyle>+</PlusIconStyle>}
    </StoryButtonStyle>
  );
}

const StoryButtonStyle = styled.button`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 2px solid ${COLOR.borderOrangeColor};
  cursor: pointer;
  padding: 0;
  box-sizing: content-box;
  margin-right: 12px;
`;

const ProfileImageStyle = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 100%;
`;

const PlusIconStyle = styled.div`
  position: absolute;
  bottom: -5px;
  right: 0;
  width: 20px;
  height: 20px;
  object-fit: cover;
  background-color: ${COLOR.btnPrimaryColor};
  border-radius: 100%;
  color: ${COLOR.fontLightGrayColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
