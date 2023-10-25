import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { COLOR, FONT_SIZE } from '../../../utils';
import Button from '../../../components/Button';
import chatIcon from '../../../assets/icon/icon-message-circle.svg';
import shareIcon from '../../../assets/icon/icon-share.png';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../recoil/atom';
import useAPI from '../../../hooks/useAPI';
import { api } from '../../../api/baseURL';

export default function ProfileInfo({ whosProfile, userProfileInfo }) {
    const { header } = useAPI();
    const navigate = useNavigate();

    const handleFollowingsClick = () => {
        navigate(`/profile/${userProfileInfo.accountname}/followings`);
    };
    const handleFollowersClick = () => {
        navigate(`/profile/${userProfileInfo.accountname}/followers`);
    };

    const fetchFollowingList = async () => {
        try {
            const res = await api.get(`/profile/${userProfileInfo.accountname}/following`, {
                headers: header,
            });
            console.log('🌟내 팔로잉 리스트 불러오기 성공');
            //setFollowingList(res.data);
        } catch (err) {
            console.error(err);
            console.log('🔥내 팔로잉 리스트 불러오기 실패');
        }
    };
    const fetchFollowerList = async () => {
        try {
            const res = await api.get(`/profile/${userProfileInfo.accountname}/follower`, {
                headers: header,
            });
            console.log('🌟내 팔로워 리스트 불러오기 성공');
            //setFollowerList(res.data);
        } catch (err) {
            console.error(err);
            console.log('🔥내 팔로워 리스트 불러오기 실패');
        }
    };

    return (
        <ProfileInfoContainer>
            <h2 className="a11y-hidden">프로필 정보</h2>
            <ProfileImgStyle>
                <FollowInfoStyle onClick={handleFollowersClick}>
                    <FollowInfoNumbers isFollowing={true}>{userProfileInfo.followerCount}</FollowInfoNumbers>
                    <FollowInfoText>followers</FollowInfoText>
                </FollowInfoStyle>
                <ProfileImage src={userProfileInfo.image} alt="유저 프로필 이미지" />
                <FollowInfoStyle onClick={handleFollowingsClick}>
                    <FollowInfoNumbers>{userProfileInfo.followingCount}</FollowInfoNumbers>
                    <FollowInfoText>followings</FollowInfoText>
                </FollowInfoStyle>
            </ProfileImgStyle>
            <ProfileName>{userProfileInfo.username}</ProfileName>
            <ProfileId>@{userProfileInfo.accountname}</ProfileId>
            <p>{whosProfile}</p>
            <ProfileMessage>{userProfileInfo.intro}</ProfileMessage>
            <ButtonsStyle>
                {
                    {
                        myProfile: (
                            <MyProfileBtns>
                                <Button buttonText={'프로필 수정'} reversed size={'M'} onClickHandler />
                                <Button buttonText={'상품 등록'} reversed size={'M'} onClickHandler />
                            </MyProfileBtns>
                        ),
                        isFollow: (
                            <>
                                <ChatIcon src={chatIcon} alt="채팅 아이콘" />
                                <Button buttonText={'언팔로우'} reversed size={'M'} onClickHandler />
                                <ShareIcon src={shareIcon} alt="공유하기 아이콘" />
                            </>
                        ),
                        notFollow: (
                            <>
                                <ChatIcon src={chatIcon} alt="채팅 아이콘" />
                                <Button buttonText={'팔로우'} size={'M'} onClickHandler />
                                <ShareIcon src={shareIcon} alt="공유하기 아이콘" />
                            </>
                        ),
                    }[whosProfile]
                }
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
    color: ${(props) => (props.isFollowing ? COLOR.fontDarkColor : COLOR.fontPrimaryColor)};
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
