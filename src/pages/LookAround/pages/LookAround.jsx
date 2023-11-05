import React, { Suspense, useEffect, useState } from "react";
import { styled } from "styled-components";
import { COLOR } from "../../../utils";
import Layout from "../../../components/Layout/Layout";
import BasicHeader from "../../../components/Header/BasicHeader";
import LayoutContent from "../../../components/Layout/LayoutContent";
import NavBar from "../../../components/Footer/NavBar";
import Gallery from "../components/Gallery";
import { api } from "../../../api/baseURL";
import useAPI from "../../../hooks/useAPI";
import useModal from "../../../hooks/useModal";
import BottomModal from "../../../components/Modal/BottomModal";
import AlertModal from "../../../components/Modal/AlertModal";
import useAlertModal from "../../../hooks/useAlertModal";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ssduckUserListState, userState } from "../../../recoil/atom";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";

export default function LookAround() {
  const { header } = useAPI();
  const setUser = useSetRecoilState(userState);
  const ssduckUsers = useRecoilValue(ssduckUserListState);

  const navigate = useNavigate();

  const {
    isModalOpen,
    isUserAlertModalOpen,
    userAlertModal,
    userModalMenuList,
    onModalHandler,
    userAlertModalHandler,
  } = useModal();
  const { isAlertModalOpen, alertModalHandler } = useAlertModal();

  const [galleyList, setGalleryList] = useState([]);
  const [alertModal, setAlertModal] = useState({
    alertTitle: "",
    leftBtnText: "취소",
    rightBtnText: "",
  });

  const fetchUserPost = async (userAccountname) => {
    try {
      const res = await api.get(`/post/${userAccountname}/userpost`, {
        headers: header,
      });

      res.data &&
        res.data.post.forEach((post) => {
          post.image && setGalleryList((prev) => [...prev, post]);
        });

      console.log(`🌟${userAccountname} 게시글 불러오기 성공`);
    } catch (err) {
      console.error(err);
      console.log(`🔥${userAccountname} 게시글 불러오기 실패`);
    }
  };

  const sortShuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    ssduckUsers.forEach((user) => {
      fetchUserPost(user.accountname);
    });
  }, [ssduckUsers]);

  return (
    <Layout>
      <BasicHeader mode={"post"} onClickMoreBtnHandler={onModalHandler} />
      <LayoutContent>
        <GalleryStyle>
          <Suspense fallback={<Loading />}>
            {galleyList &&
              sortShuffle(galleyList).map((post) => {
                return <Gallery key={post.id} post={post} />;
              })}
          </Suspense>
        </GalleryStyle>
      </LayoutContent>
      <BottomModal
        isModalOpen={isModalOpen}
        menu={userModalMenuList}
        onModalHandler={onModalHandler}
      />
      <AlertModal
        isModalOpen={isAlertModalOpen}
        alertTitle={alertModal.alertTitle}
        leftBtnText={alertModal.leftBtnText}
        rightBtnText={alertModal.rightBtnText}
        onModalHandler={alertModalHandler}
      />
      <AlertModal
        isModalOpen={isUserAlertModalOpen}
        alertTitle={userAlertModal.alertTitle}
        leftBtnText={userAlertModal.leftBtnText}
        rightBtnText={userAlertModal.rightBtnText}
        onModalHandler={userAlertModalHandler}
        onClickRightBtnHandler={() => {
          setUser({
            _id: "",
            username: "",
            email: "",
            accountname: "",
            intro: "",
            image: "",
            token: "",
            refreshToken: "",
          });
          localStorage.removeItem("token");
          navigate("/");
        }}
      />
      <NavBar />
      <Loading />
    </Layout>
  );
}

const GalleryStyle = styled.section`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(3, minmax(auto, 114px));
  gap: 5px;
  padding: 16px 0 30px;
  background-color: ${COLOR.bgPrimaryColor};
`;
