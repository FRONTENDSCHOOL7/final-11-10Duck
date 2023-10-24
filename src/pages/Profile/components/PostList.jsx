import React, { useState } from 'react';
import { styled } from 'styled-components';
import { COLOR } from '../../../utils';
import PostItem from '../../../components/Post';
import ListOnIcon from '../../../assets/icon/icon-post-list-on.png';
import ListOffIcon from '../../../assets/icon/icon-post-list-off.png';
import AlbumOnIcon from '../../../assets/icon/icon-post-album-on.png';
import AlbumOffIcon from '../../../assets/icon/icon-post-album-off.png';

export default function PostList() {
    const [isAlbum, setIsAlbum] = useState(false);
    const hadleIconClick = () => {
        setIsAlbum((prev) => !prev);
    };
    return (
        <section>
            <ListNav>
                <ListNavIcon src={isAlbum ? ListOffIcon : ListOnIcon} alt="게시글 리스트로 보기 아이콘" onClick={hadleIconClick} />
                <ListNavIcon src={isAlbum ? AlbumOnIcon : AlbumOffIcon} alt="게시글 앨범식으로 보기 아이콘" onClick={hadleIconClick} />
            </ListNav>
            {isAlbum ? (
                <AlbumStyle>
                    {/* 클릭한 유저 아이디의 게시글에서 이미지 주소[] 순회 예정 */}
                    <Album src="http://placehold.it/200x200" alt="" />
                    <Album src="http://placehold.it/200x200" alt="" />
                    <Album src="http://placehold.it/200x200" alt="" />
                    <Album src="http://placehold.it/200x200" alt="" />
                    <Album src="http://placehold.it/200x200" alt="" />
                    <Album src="http://placehold.it/200x200" alt="" />
                    <Album src="http://placehold.it/200x200" alt="" />
                    <Album src="http://placehold.it/200x200" alt="" />
                    <Album src="http://placehold.it/200x200" alt="" />
                </AlbumStyle>
            ) : (
                <ListStyle>
                    {/* 클릭한 유저 아이디의 게시글[] 순회 예정 */}
                    <PostItem />
                    <PostItem />
                    <PostItem />
                </ListStyle>
            )}
        </section>
    );
}

const ListNav = styled.div`
    min-height: 44px;
    text-align: right;
    background-color: ${COLOR.bgPrimaryColor};
    border-top: 1px solid ${COLOR.bgBorderColor};
    border-bottom: 1px solid ${COLOR.bgBorderColor};
`;

const ListNavIcon = styled.img`
    width: 26px;
    height: 26px;
    margin: 9px 16px 9px 0;
    cursor: pointer;
`;
const ListStyle = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${COLOR.bgPrimaryColor};
`;

const Album = styled.img`
    width: 114px;
    height: 114px;
    cursor: pointer;
`;
const AlbumStyle = styled.article`
    display: grid;
    place-content: center;
    grid-template-columns: repeat(3, minmax(auto, 114px));
    gap: 8px;
    padding: 16px 0 30px;
    background-color: ${COLOR.bgPrimaryColor};
`;
