import React, { useState } from 'react';
import { styled } from 'styled-components';
import ArrowIcon from '../../assets/icon/icon-arrow-left.png';
import { COLOR, FONT_SIZE } from '../../utils';

export default function SearchHeader() {
    const [searchInput, setSerchInput] = useState('');

    const searchHandle = (e) => {
        setSerchInput(e.target.value);
    };
    return (
        <HeaderContainer>
            <IconImg src={ArrowIcon} alt="뒤로가기 아이콘" />
            <label className="a11y-hidden" htmlFor="searchId">
                계정 검색
            </label>
            <SearchInput type="text" id="searchId" placeholder="계정 검색" value={searchInput} onChange={searchHandle} />
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${COLOR.fontPrimaryColor};
    padding: 13px 16px;

    .a11y-hidden {
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
    }
`;
const IconImg = styled.img`
    width: 22px;
    height: 22px;
    cursor: pointer;
    margin-left: 0;
`;
const SearchInput = styled.input`
    width: 316px;
    height: 32px;
    background: #f2f2f2;
    border: none;
    border-radius: 32px;
    padding-left: 15px;
    margin-left: 10px;
    font-size: ${FONT_SIZE.large};

    &::placeholder {
        color: var(--C4C4C4, #c4c4c4);
        padding: 3px;
    }
`;
