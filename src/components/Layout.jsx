import React from 'react';
import { styled } from 'styled-components';
import TabBar from './TabBar';
import CommentBar from './CommentBar';

export default function Layout() {
    return (
        <LayoutContainer>
            <HomeHeader></HomeHeader>
            Layout
            {/* TabBar.jsx 또는 CommentBar.jsx */}
            <CommentBar mode={'post'}></CommentBar>
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
