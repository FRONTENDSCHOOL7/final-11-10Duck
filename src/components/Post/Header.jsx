import React from "react";
import ProfileImage from "../../imgs/basic-profile-img.png";
import { styled } from "styled-components";
import Button from "../Button";

export default function Header(props) {
  const { hasButton } = props;
  return (
    <HeaderStyle>
      <ProfileContainerStyle>
        <ProfileImageStyle src={ProfileImage} alt="프로필 이미지" />
        <UserInfoContainerStyle>
          <UserNameStyle>애월읍 위니브 감귤 농장</UserNameStyle>
          <UserIdStyle>@ weniv_Mandarin</UserIdStyle>
        </UserInfoContainerStyle>
      </ProfileContainerStyle>
      {hasButton && <Button buttonText="팔로우" size="s" />}
    </HeaderStyle>
  );
}

const HeaderStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;

const ProfileContainerStyle = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImageStyle = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const UserInfoContainerStyle = styled.div`
  margin-left: 12px;
`;

const UserNameStyle = styled.div`
  font-size: 14px;
  color: var(--font-dark-color);
  margin-bottom: 6px;
`;

const UserIdStyle = styled.div`
  font-size: 12px;
  color: var(--font-primary-color);
`;
