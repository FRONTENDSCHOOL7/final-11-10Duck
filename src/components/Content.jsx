import React from 'react';
import { styled } from 'styled-components';
import { COLOR } from '../utils';

export default function Content({ children }) {
    return <ContentStyle> {children}</ContentStyle>;
}

const ContentStyle = styled.div`
    flex-grow: 1;
    padding: 0 16px;
    background-color: ${COLOR.bgPrimaryColor};
`;
