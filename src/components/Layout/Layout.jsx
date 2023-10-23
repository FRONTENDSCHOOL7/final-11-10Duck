import React from 'react';
import { styled } from 'styled-components';
import { COLOR } from '../../utils';

export default function Layout({ children }) {
    return <LayoutStyle>{children}</LayoutStyle>;
}

const LayoutStyle = styled.section`
    background-color: ${COLOR.bgPrimaryColor};

    max-width: 390px;
    max-height: 820px;

    box-sizing: content-box;
    width: 100%;

    display: flex;
    flex-direction: column;

    /* 임시 border */
    border: 1px solid ${COLOR.bgBorderColor};
`;
