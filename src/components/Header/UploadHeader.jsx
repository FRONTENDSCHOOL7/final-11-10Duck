import React from 'react';
import { styled } from 'styled-components';
import ArrowIcon from '../../assets/icon/icon-arrow-left.png';
import Button from '../Button';
import { COLOR } from '../../utils';

export default function UploadHeader() {
    return (
        <HeaderContainer>
            <IconImg src={ArrowIcon} alt="뒤로가기 아이콘" />
            <Button buttonText={'저장'} disabled={false} size={'M'} reversed={false} />
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
`;
const IconImg = styled.img`
    width: 22px;
    height: 22px;
    cursor: pointer;
    margin-left: 0;
`;
