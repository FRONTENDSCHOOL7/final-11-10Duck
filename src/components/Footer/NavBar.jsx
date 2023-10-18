import React from 'react';
import { styled } from 'styled-components';

import { ReactComponent as HomeIcon } from '../../images/icon-home.svg';
import { ReactComponent as ChatIcon } from '../../images/icon-message-circle.svg';
import { ReactComponent as PostIcon } from '../../images/icon-edit.svg';
import { ReactComponent as ProfileIcon } from '../../images/icon-user.svg';

export default function NavBar() {
    const menus = [
        { label: '홈', icon: HomeIcon },
        { label: '채팅', icon: ChatIcon },
        { label: '게시물 작성', icon: PostIcon },
        { label: '프로필', icon: ProfileIcon },
    ];
    // 아이콘 클릭시 svg fill stroke 변경 기능 필요
    return (
        <NavBarContainer>
            {menus.map((nav) => {
                return (
                    <NavStyle key={nav.label}>
                        <nav.icon width={24} height={24} />
                        <NavText>{nav.label}</NavText>
                    </NavStyle>
                );
            })}
        </NavBarContainer>
    );
}

const NavBarContainer = styled.footer`
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    border-top: 1px solid var(--font-primary-color);
`;

const NavStyle = styled.button`
    width: 84px;
    border: none;
    background: none;
    cursor: pointer;
`;

const NavText = styled.p`
    color: var(--font-primary-color);
    font-size: 10px;
    margin-top: 4px;
`;
