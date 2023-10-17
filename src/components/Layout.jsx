import React from 'react';
import { styled } from 'styled-components';
import TabBar from './TabBar';
import CommentBar from './CommentBar';
import BasicHeader from './Header/BasicHeader';
import SearchHeader from './Header/SearchHeader';

export default function Layout() {
    return (
        <LayoutContainer>
            <SearchHeader />
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
