import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { COLOR } from "../../../utils";
import PostItem from "../../../components/Post";
import ListOnIcon from "../../../assets/icon/icon-post-list-on.png";
import ListOffIcon from "../../../assets/icon/icon-post-list-off.png";
import AlbumOnIcon from "../../../assets/icon/icon-post-album-on.png";
import AlbumOffIcon from "../../../assets/icon/icon-post-album-off.png";
import useAPI from "../../../hooks/useAPI";
import { api } from "../../../api/baseURL";
import { AddAPIURLImage } from "../../../utils/function";

export default function PostList({ urlAccountName }) {
  const [isAlbum, setIsAlbum] = useState(false);
  const [userPostList, setUserPostList] = useState([]);

  const { header } = useAPI();

  const fetchMyPost = async () => {
    try {
      const res = await api.get(`/post/${urlAccountName}/userpost`, {
        headers: header,
      });
      console.log("🌟내 게시글 불러오기 성공");
      setUserPostList(res.data.post);
    } catch (err) {
      console.error(err);
      console.log("🔥내 게시글 불러오기 실패");
    }
  };

  const handleListClick = () => {
    if (!isAlbum) return;
    setIsAlbum((prev) => !prev);
  };
  const handleAlbumClick = () => {
    if (isAlbum) return;
    setIsAlbum((prev) => !prev);
  };

  useEffect(() => {
    fetchMyPost();
  }, []);
  return (
    <section>
      <ListNav>
        <ListNavIcon
          src={isAlbum ? ListOffIcon : ListOnIcon}
          alt="게시글 리스트로 보기 아이콘"
          onClick={handleListClick}
        />
        <ListNavIcon
          src={isAlbum ? AlbumOnIcon : AlbumOffIcon}
          alt="게시글 앨범식으로 보기 아이콘"
          onClick={handleAlbumClick}
        />
      </ListNav>
      {isAlbum ? (
        <AlbumStyle>
          {userPostList.map((post) => {
            if (post.image) {
              return (
                <Album
                  src={AddAPIURLImage(post.image)}
                  alt={`${post.author.username}의 게시글 이미지`}
                  key={post.id}
                />
              );
            }
          })}
        </AlbumStyle>
      ) : (
        <ListStyle>
          {userPostList.map((post) => {
            return (
              <PostItem post={post} key={post.id} isMoveToContentPage={true} />
            );
          })}
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
