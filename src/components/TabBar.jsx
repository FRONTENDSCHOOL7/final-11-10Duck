import React from 'react';
import { styled } from 'styled-components';
import homeIcon from '../images/icon-home.png';
import chatIcon from '../images/icon-message-circle.png';
import postIcon from '../images/icon-edit.png';
import profileIcon from '../images/icon-user.png';

export default function TabBar() {
    const menus = [
        { text: '홈', imgSrc: homeIcon },
        { text: '채팅', imgSrc: chatIcon },
        { text: '게시물 작성', imgSrc: postIcon },
        { text: '프로필', imgSrc: profileIcon },
    ];
    return (
        <TapBarContainer>
            {menus.map((tab) => {
                return (
                    <TabMenu>
                        <TabIcon src={tab.imgSrc}></TabIcon>
                        <TabText>{tab.text}</TabText>
                    </TabMenu>
                );
            })}
        </TapBarContainer>
    );
}

const TapBarContainer = styled.footer`
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    border-top: 1px solid var(--font-primary-color);
`;

const TabMenu = styled.button`
    width: 84px;
    border: none;
    background: none;
`;
const TabIcon = styled.img`
    width: 24px;
    height: 24px;
    vertical-align: top;
`;
const TabText = styled.p`
    color: var(--font-primary-color);
    font-size: 10px;
    margin-top: 4px;
`;
