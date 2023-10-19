import React from 'react';
import { styled } from 'styled-components';
import { COLOR } from '../../utils';

export default function LayoutContent({ children, isWhite }) {
    return <ContentStyle isWhite={isWhite}> {children}</ContentStyle>;
}

const ContentStyle = styled.main`
    flex-grow: 1;
    padding: 0 16px;
    background-color: ${(props) => (props.isWhite === undefined ? COLOR.bgPrimaryColor : props.isWhite ? COLOR.bgPrimaryColor : COLOR.bgSecondaryColor)};
    position: relative;
    overflow: scroll;
`;
