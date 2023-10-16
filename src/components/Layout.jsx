import React from 'react';
import { styled } from 'styled-components';

export default function Layout() {
    return (
        <LayoutContainer>
            <HomeHeader></HomeHeader>
            Layout
            <TabMenuBar>
                <TabMenu>
                    <TabIcon></TabIcon>
                    <p>홈</p>
                </TabMenu>
                <TabMenu>채팅</TabMenu>
                <TabMenu>게시물 작성</TabMenu>
                <TabMenu>프로필</TabMenu>
            </TabMenuBar>
        </LayoutContainer>
    );
}

const LayoutContainer = styled.div`
    max-width: 390px;
    min-height: 850px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const HomeHeader = styled.header`
    border: 1px solid black;
    height: 48px;
`;

const TabMenuBar = styled.footer`
    border: 1px solid black;
    background-color: aqua;
    height: 60px;
    display: flex;
    justify-content: center;
    gap: 14px;
`;
const TabMenu = styled.button`
    background-color: gold;
    width: 84px;
    border: none;
    /* background-image: url('/images/icon-home.png');
    background-repeat: no-repeat;
    background-position: center; */
`;

const TabIcon = styled.img`
    src: '/public/images/icon-home.png';
    width: 24px;
    height: 24px;
`;
