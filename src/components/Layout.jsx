import React from 'react';
import { styled } from 'styled-components';
import TabBar from './TabBar';
// import homeIcon from '../images/icon-home.png';
// import chatIcon from '../images/icon-message-circle.png';
// import postIcon from '../images/icon-edit.png';
// import profileIcon from '../images/icon-user.png';

export default function Layout() {
    return (
        <LayoutContainer>
            <HomeHeader></HomeHeader>
            Layout
            <LayoutFooter>
                <TabBar></TabBar>
            </LayoutFooter>
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

const LayoutFooter = styled.footer`
    border: 1px solid black;

    height: 60px;
    display: flex;
    justify-content: center;
    gap: 14px;
`;
