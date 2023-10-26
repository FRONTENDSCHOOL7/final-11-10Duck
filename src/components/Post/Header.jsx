import React from "react";
import { styled } from "styled-components";
import Button from "../Button";
import { COLOR } from "../../utils";
import MoreButton from "../../assets/icon/icon-more-vertical.png";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const { post, hasFollowButton, onModalHandler } = props;
  const author = post.author;

  const navigate = useNavigate();

  return (
    <HeaderStyle>
      <ProfileContainerStyle
        onClick={() => {
          navigate(`/profile/${author.accountname}`);
        }}
      >
        <ProfileImageStyle src={author.image} alt="프로필 이미지" />
        <UserInfoContainerStyle>
          <UserNameStyle>{author.username}</UserNameStyle>
          <UserIdStyle>{`@ ${author.accountname}`}</UserIdStyle>
        </UserInfoContainerStyle>
      </ProfileContainerStyle>
      {hasFollowButton ? (
        <Button buttonText="팔로우" size="s" />
      ) : (
        <MoreButtonStyle onClick={onModalHandler}>
          <ButtonImage src={MoreButton} alt="더보기 버튼" />
        </MoreButtonStyle>
      )}
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
  cursor: pointer;
`;

const ProfileImageStyle = styled.img`
  width: 42px;
  height: 42px;
  object-fit: cover;
  border-radius: 100%;
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

const MoreButtonStyle = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const ButtonImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;
