import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { ReactComponent as HomeIcon } from '../../assets/icon/icon-home.svg';
import { ReactComponent as ChatIcon } from '../../assets/icon/icon-message-circle.svg';
import { ReactComponent as PostIcon } from '../../assets/icon/icon-edit.svg';
import { ReactComponent as ProfileIcon } from '../../assets/icon/icon-user.svg';
import { COLOR, FONT_SIZE } from '../../utils';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();

    const [currentPath, setCurrentPath] = useState('');
    const [currentNav, setCurrentNav] = useState({});

    const menus = [
        {
            id: 0,
            label: '홈',
            icon: <HomeIcon />,
            url: '/feed',
            isOn: false,
        },
        {
            id: 1,
            label: '채팅',
            icon: <ChatIcon />,
            url: '/chat',
            isOn: false,
        },
        {
            id: 2,
            label: '게시물 작성',
            icon: <PostIcon />,
            url: '/post/upload',
            isOn: false,
        },
        {
            id: 3,
            label: '프로필',
            icon: <ProfileIcon />,
            url: '/profile',
            isOn: false,
        },
    ];

    useEffect(() => {
        if (!window.location.pathname) setCurrentPath('/feed');
        else if (window.location.pathname === '/') setCurrentPath('/feed');
        else if (window.location.pathname.includes('/profile')) setCurrentPath('/profile');
        else setCurrentPath(window.location.pathname);
    }, []);
    useEffect(() => {
        const menu = menus.filter((item) => {
            return currentPath === item.url;
        });

        setCurrentNav({ ...menu[0], isOn: true });
    }, [currentPath]);

    return (
        <NavBarContainer>
            {menus.map((nav, idx) => {
                return (
                    <NavStyle
                        key={nav.id}
                        className={currentNav.id === idx && !!currentNav.isOn ? 'isClick' : ''}
                        onClick={() => {
                            navigate(nav.url);
                        }}
                    >
                        {nav.icon}
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
    border-top: 1px solid ${COLOR.bgBorderColor};
    background-color: ${COLOR.bgPrimaryColor};
    box-sizing: border-box;
`;

const NavStyle = styled.button`
    width: 80px;
    border: none;
    background: none;
    cursor: pointer;
    padding: 12px 0 6px 0;
    font-family: 'PyeongChangPeace';

    & svg {
        width: 24px;
        height: 24px;
    }
    &.isClick {
        path,
        rect {
            fill: ${COLOR.bgPrimaryColor};
            stroke: ${COLOR.btnPrimaryColor};
        }
        p {
            color: ${COLOR.btnPrimaryColor};
        }
    }
    &:hover {
        &:hover {
            path,
            rect {
                stroke: ${COLOR.btnPrimaryColor};
            }

            p {
                color: ${COLOR.btnPrimaryColor};
            }
        }
    }
`;

const NavText = styled.p`
    color: ${COLOR.fontPrimaryColor};
    font-size: ${FONT_SIZE.small};
    margin-top: 4px;
`;
