import React from 'react';
import { styled } from 'styled-components';
import { COLOR } from '../../utils';

export default function LayoutContent({ children }) {
    return <ContentStyle> {children}</ContentStyle>;
}

const ContentStyle = styled.main`
    flex-grow: 1;
    padding: 0 16px;
    background-color: ${COLOR.bgPrimaryColor};
    position: relative;
    overflow: scroll;
`;
