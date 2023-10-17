import React from 'react';
import { styled } from 'styled-components';
import NavBar from './Footer/NavBar';
import CommentBar from './Footer/CommentBar';
import BasicHeader from './Header/BasicHeader';
import SearchHeader from './Header/SearchHeader';
import UploadHeader from './Header/UploadHeader';
import MainHeader from './Header/MainHeader';

export default function Layout() {
    return (
        <LayoutContainer>
            {/* header 컴포넌트 */}
            <MainHeader></MainHeader>
            Layout
            {/* footer 컴포넌트 */}
            {/* TabBar.jsx 또는 CommentBar.jsx */}
            {/* <CommentBar mode={'post'}></CommentBar> */}
            <NavBar></NavBar>
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
