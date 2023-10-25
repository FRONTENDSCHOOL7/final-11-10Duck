import React from 'react';
import { styled } from 'styled-components';
import { COLOR, FONT_SIZE } from '../../../utils';
import Button from '../../../components/Button';

export default function FollowUser({ user }) {
    console.log('user : ', user);
    return (
        <FollowUserStyle>
            <FollowUserImage src={user.image} alt="" />
            <FollowTextStyle>
                <FollowUserName>{user.username}</FollowUserName>
                <FollowUserInfo>{user.intro}</FollowUserInfo>
            </FollowTextStyle>

            <FollowButtonStyle>{user.isfollow ? <Button buttonText={'취소'} size="MS" reversed onClickHandler /> : <Button buttonText={'팔로우'} size="MS" onClickHandler />}</FollowButtonStyle>
        </FollowUserStyle>
    );
}
const FollowUserStyle = styled.article`
    display: flex;
    align-items: center;
    margin: 16px 0;
`;
const FollowUserImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;
const FollowUserName = styled.h3`
    color: ${COLOR.fontDarkColor};
    font-size: ${FONT_SIZE.large};
    font-weight: 500;
`;
const FollowUserInfo = styled.p`
    color: ${COLOR.fontPrimaryColor};
    font-size: ${FONT_SIZE.medium};
    margin-top: 6px;
`;
const FollowTextStyle = styled.div`
    margin: 6px 0 6px 12px;
`;
const FollowButtonStyle = styled.div`
    margin: 0 0 0 auto;
`;
