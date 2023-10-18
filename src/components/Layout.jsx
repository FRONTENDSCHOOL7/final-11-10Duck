import React from 'react';
import { styled } from 'styled-components';

export default function Layout({ children }) {
    return <LayoutContainer>{children}</LayoutContainer>;
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
