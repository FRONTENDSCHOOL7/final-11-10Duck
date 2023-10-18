import React from 'react';
import { styled } from 'styled-components';
import ArrowIcon from '../../images/icon-arrow-left.png';
import moreIcon from '../../images/icon-more-vertical.png';

export default function BasicHeader({ mode }) {
    ////유저 정보 state에서 사용자 이름 저장
    const userName = '기본 헤더';

    const backIconHandle = () => {
        // 뒤로가기 navigate 또는 전 페이지로 라우트
    };
    const moreIconHandle = () => {
        // 더보기 모달 오픈
    };

    return (
        <HeaderContainer>
            <ArrowStyle>
                <IconImg src={ArrowIcon} alt="뒤로가기 아이콘" onClick={backIconHandle} />
                {/* props.mode === 'chat'일때 유저명 표시 */}
                <UserName>{mode === 'post' ? '' : userName}</UserName>
            </ArrowStyle>
            <IconImg src={moreIcon} alt="더보기 아이콘" onClick={moreIconHandle} />
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--font-primary-color);
    padding: 13px 16px;
`;
const ArrowStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;
const IconImg = styled.img`
    width: 22px;
    height: 22px;
    cursor: pointer;
`;
const UserName = styled.p`
    font-size: 14px;
    font-weight: 500;
`;
