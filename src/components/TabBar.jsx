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
        <>
            {menus.map((tab) => {
                return (
                    <TabMenu>
                        <TabIcon src={tab.imgSrc}></TabIcon>
                        <TabText>{tab.text}</TabText>
                    </TabMenu>
                );
            })}
        </>
    );
}

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
    color: var(--767676, #767676);
    font-size: 10px;
    margin-top: 4px;
`;
