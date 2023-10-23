import React from 'react';
import { styled } from 'styled-components';
import { COLOR, FONT_SIZE } from '../../../utils';
import Button from '../../../components/Button';

export default function FollowUser() {
    return (
        <FollowUserStyle>
            <FollowUserImage src="http://placehold.it/50x50" alt="" />
            <FollowTextStyle>
                <FollowUserName>애월읍 위니브 감귤농장</FollowUserName>
                <FollowUserInfo>정성을 다해 귤을 땁니다.</FollowUserInfo>
            </FollowTextStyle>
            {/* <Button buttonText={'취소'} size="MS" reversed onClickHandler /> */}
            <FollowButtonStyle>
                <Button buttonText={'팔로우'} size="M" onClickHandler />
            </FollowButtonStyle>
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
