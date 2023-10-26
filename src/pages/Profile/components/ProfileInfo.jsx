import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { COLOR, FONT_SIZE } from "../../../utils";
import Button from "../../../components/Button";
import chatIcon from "../../../assets/icon/icon-message-circle.svg";
import shareIcon from "../../../assets/icon/icon-share.png";
import { useNavigate } from "react-router-dom";
import useAPI from "../../../hooks/useAPI";
import { api } from "../../../api/baseURL";

export default function ProfileInfo({
  isMyProfile,
  profileInfo,
  isFollow,
  changeProfileInfo,
  changeIsFollow,
}) {
  const { header } = useAPI();
  const navigate = useNavigate();

  //const [userInfo, setUserInfo] = useState(profileInfo ? profileInfo : {});
  //const [isFollow, setIsFollow] = useState();

  const handleFollowingsClick = () => {
    navigate(`/profile/${profileInfo.accountname}/followings`);
  };
  const handleFollowersClick = () => {
    navigate(`/profile/${profileInfo.accountname}/followers`);
  };

  const fetchDoFollow = async () => {
    try {
      const res = await api.post(`/profile/${profileInfo.accountname}/follow`, {
        headers: header,
      });
      console.log("🌟 팔로우하기 성공");
      //changeProfileInfo(res.data.profile);
      //setIsFollow(res.data.profile.isfollow);
    } catch (err) {
      console.error(err);
      console.log("🔥 팔로우하기 실패");
    }
  };

  const fetchDoUnfollow = async () => {
    try {
      const res = await api.post(
        `/profile/${profileInfo.accountname}/unfollow`,
        {
          headers: header,
        }
      );
      console.log("🌟 언팔로우하기 성공");
      //changeProfileInfo(res.data.profile);
      //setIsFollow(res.data.profile.isfollow);
    } catch (err) {
      console.error(err);
      console.log("🔥 언팔로우하기 실패");
    }
  };
  const handleFollowClick = () => {
    //fetchDoFollow();
    changeIsFollow((prev) => !prev);
  };
  const handleUnfollowClick = () => {
    //fetchDoUnfollow();
    changeIsFollow((prev) => !prev);
  };

  return (
    <ProfileInfoContainer>
      <h2 className="a11y-hidden">프로필 정보</h2>
      <ProfileImgStyle>
        <FollowInfoStyle onClick={handleFollowersClick}>
          <FollowInfoNumbers isFollowing={true}>
            {profileInfo.followerCount}
          </FollowInfoNumbers>
          <FollowInfoText>followers</FollowInfoText>
        </FollowInfoStyle>
        <ProfileImage src={profileInfo.image} alt="유저 프로필 이미지" />
        <FollowInfoStyle onClick={handleFollowingsClick}>
          <FollowInfoNumbers>{profileInfo.followingCount}</FollowInfoNumbers>
          <FollowInfoText>followings</FollowInfoText>
        </FollowInfoStyle>
      </ProfileImgStyle>
      <ProfileName>{profileInfo.username}</ProfileName>
      <ProfileId>@{profileInfo.accountname}</ProfileId>
      <ProfileMessage>{profileInfo.intro}</ProfileMessage>
      <ButtonsStyle>
        {isMyProfile ? (
          <>
            <MyProfileBtns>
              <Button
                buttonText={"프로필 수정"}
                reversed
                size={"M"}
                onClickHandler={() => {}}
              />
              <Button
                buttonText={"상품 등록"}
                reversed
                size={"M"}
                onClickHandler={() => {
                  navigate("/add-product");
                }}
              />
            </MyProfileBtns>
          </>
        ) : (
          <>
            <ChatIcon src={chatIcon} alt="채팅 아이콘" />
            {/* {profileInfo.isfollow ? (
                            <Button buttonText={'언팔로우하기'} reversed size={'M'} onClickHandler={handleUnfollowClick} />
                        ) : (
                            <Button buttonText={'팔로우하기'} size={'M'} onClickHandler={handleFollowClick} />
                        )} */}
            {isFollow ? (
              <Button
                buttonText={"언팔로우하기"}
                reversed
                size={"M"}
                onClickHandler={handleUnfollowClick}
              />
            ) : (
              <Button
                buttonText={"팔로우하기"}
                size={"M"}
                onClickHandler={handleFollowClick}
              />
            )}

            <ShareIcon src={shareIcon} alt="공유하기 아이콘" />
          </>
        )}
      </ButtonsStyle>
    </ProfileInfoContainer>
  );
}

const ProfileInfoContainer = styled.section`
  width: 100%;
  height: 314px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLOR.bgPrimaryColor};

  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;
const ProfileImgStyle = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const ButtonsStyle = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileName = styled.h3`
  color: ${COLOR.fontDarkColor};
  font-size: ${FONT_SIZE.xlarge};
  font-weight: 700;
  margin-top: 16px;
`;
const ProfileId = styled.p`
  color: ${COLOR.fontPrimaryColor};
  font-size: ${FONT_SIZE.large};
  font-weight: 400;
  margin-top: 6px;
`;
const ProfileMessage = styled.p`
  color: ${COLOR.fontPrimaryColor};
  font-size: ${FONT_SIZE.large};
  font-weight: 400;
  margin: 16px 0 24px 0;
`;
const ProfileImage = styled.img`
  width: 110px;
  height: 110px;
  margin: 0 40px;
  border-radius: 50%;
`;
const FollowInfoStyle = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
const FollowInfoNumbers = styled.button`
  font-size: 18px;
  font-weight: 700;
  color: ${(props) =>
    props.isFollowing ? COLOR.fontDarkColor : COLOR.fontPrimaryColor};
  display: block;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const FollowInfoText = styled.span`
  color: ${COLOR.fontPrimaryColor};
  font-size: 8px;
`;
const ChatIcon = styled.img`
  width: 18px;
  height: 18px;
  padding: 7px;
  margin-right: 10px;

  border: 1px solid ${COLOR.bgBorderColor};
  border-radius: 50%;
`;
const ShareIcon = styled.img`
  width: 18px;
  height: 18px;
  padding: 7px;
  margin-left: 10px;
  border: 1px solid ${COLOR.bgBorderColor};
  border-radius: 50%;
`;
const MyProfileBtns = styled.div`
  display: flex;
  gap: 12px;
`;
