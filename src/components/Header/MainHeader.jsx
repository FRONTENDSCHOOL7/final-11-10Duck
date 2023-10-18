import React from 'react';
import { styled } from 'styled-components';
import SearchIcon from '../../assets/icon/icon-search.png';
import { COLOR } from '../../utils';

export default function MainHeader() {
    return (
        <HeaderContainer>
            <MarketTitle>씁덕학개론 피드</MarketTitle>
            <IconImg src={SearchIcon} alt="검색하기 아이콘" />
        </HeaderContainer>
    );
}
const HeaderContainer = styled.header`
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${COLOR.bgBorderColor};
    background-color: ${COLOR.bgPrimaryColor};
    padding: 13px 16px;
`;
const IconImg = styled.img`
    width: 22px;
    height: 22px;
    cursor: pointer;
    margin-left: 0;
`;
const MarketTitle = styled.h2`
    color: #000;
    font-size: 18px;
    font-weight: 500;
`;
