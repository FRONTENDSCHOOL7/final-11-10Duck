import React from "react";
import { styled } from "styled-components";
import Button from "../Button";
import { COLOR } from "../../utils";
import { changeProfileImage } from "../../utils/function";

export default function Header(props) {
  const { post, hasButton } = props;
  const author = post.author;

  return (
    <HeaderStyle>
      <ProfileContainerStyle>
        <ProfileImageStyle
          src={changeProfileImage(author.image)}
          alt="프로필 이미지"
        />
        <UserInfoContainerStyle>
          <UserNameStyle>{author.username}</UserNameStyle>
          <UserIdStyle>{`@ ${author.accountname}`}</UserIdStyle>
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
  width: 42px;
  height: 42px;
  object-fit: cover;
`;

const UserInfoContainerStyle = styled.div`
  margin-left: 12px;
`;

const UserNameStyle = styled.div`
  font-size: 14px;
  color: ${COLOR.fontDarkColor};
  margin-bottom: 6px;
`;

const UserIdStyle = styled.div`
  font-size: 12px;
  color: ${COLOR.fontPrimaryColor};
`;
