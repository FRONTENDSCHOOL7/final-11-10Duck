import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout/Layout";
import BasicHeader from "../../../components/Header/BasicHeader";
import LayoutContent from "../../../components/Layout/LayoutContent";
import NavBar from "../../../components/Footer/NavBar";
import ProfileInfo from "../components/ProfileInfo";
import PostList from "../components/PostList";
import ProductScroller from "../../../components/Product/ProductScroller";
import { useRecoilState } from "recoil";
import { userState } from "../../../recoil/atom";
import { useParams } from "react-router-dom";
import useAPI from "../../../hooks/useAPI";
import { api } from "../../../api/baseURL";
import BottomModal from "../../../components/Modal/BottomModal";
import useModal from "../../../hooks/useModal";
import AlertModal from "../../../components/Modal/AlertModal";
import useAlertModal from "../../../hooks/useAlertModal";

export default function Profile() {
  const { header } = useAPI();
  const { accountName } = useParams();
  const [user, setUser] = useRecoilState(userState);

  const [urlAccountName, setUrlAccountName] = useState(
    accountName ? accountName : user.accountname
  );
  const [isMyProfile, setIsMyProfile] = useState(null);
  const [isFollow, setIsFollow] = useState(null);
  const [profileInfo, setProfileInfo] = useState({});
  const [productList, setProductList] = useState([]);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [alertModal, setAlertModal] = useState({
    alertTitle: "",
    leftBtnText: "취소",
    rightBtnText: "",
  });

  const {
    isModalOpen,
    isUserAlertModalOpen,
    userAlertModal,
    userModalMenuList,
    onModalHandler,
    userAlertModalHandler,
  } = useModal();
  const { isAlertModalOpen, alertModalHandler } = useAlertModal();

  const productModalMenuList = [
    {
      label: "삭제",
      onClickHandler: () => {
        onClickBottomModalMenu("상품을 삭제할까요?", "삭제");
      },
    },
    {
      label: "수정",
      onClickHandler: () => {
        onClickBottomModalMenu("상품을 수정할까요?", "수정");
      },
    },
    {
      label: "웹사이트에서 상품보기",
      onClickHandler: () => {},
    },
  ];

  const onClickBottomModalMenu = (alertTitle, rightBtnText) => {
    setAlertModal({ ...alertModal, alertTitle, rightBtnText });
    alertModalHandler.openModal();
    setIsPostModalOpen(false);
    setIsProductModalOpen(false);
  };

  const onClickProductHandler = (link) => {
    if (isMyProfile) {
      setIsProductModalOpen(!isProductModalOpen);
    } else {
      window.open(link);
    }
  };

  const changeIsFollow = (param) => {
    setIsFollow(param);
  };

  const fetchProfileInfo = async () => {
    try {
      const res = await api.get(`/profile/${urlAccountName}`, {
        headers: header,
      });
      console.log("🌟 프로필 정보 불러오기 성공");
      setProfileInfo(res.data.profile);
      setIsFollow(res.data.profile.isfollow);
    } catch (error) {
      console.error(error);
      console.log("🔥 프로필 정보 불러오기 실패");
    }
  };

  /**
   * 상품 목록을 가져오는 fetch 함수
   */
  const fetchProduct = async () => {
    try {
      const res = await api.get(`/product/${urlAccountName}`, {
        headers: header,
      });

      console.log("🌟상품 목록 불러오기 성공");
      setProductList(res.data.product);
    } catch (err) {
      console.log("🔥상품 목록 불러오기 실패");
      console.error(err);
    }
  };

  useEffect(() => {
    urlAccountName === user.accountname
      ? setIsMyProfile(true)
      : setIsMyProfile(false);
    fetchProduct();
  }, []);


    useEffect(() => {
        fetchProfileInfo();
        fetchProduct();
    }, [urlAccountName, isFollow]);


  useEffect(() => {
    if (!accountName) {
      setUrlAccountName(user.accountname);
      setIsMyProfile(true);
    }
  }, [accountName]);

  return (
    <Layout>
      <BasicHeader mode={"post"} onClickMoreBtnHandler={onModalHandler} />
      <LayoutContent isWhite={false} paddingOff={true}>
        {/* 프로필 정보 */}
        <ProfileInfo
          isMyProfile={isMyProfile}
          profileInfo={profileInfo}
          isFollow={isFollow}
          changeIsFollow={changeIsFollow}
        />
        {/* 판매 중인 상품 */}
        {!!productList.length && (
          <ProductScroller
            products={productList}
            onClickHandler={onClickProductHandler}
          />
        )}
        {/* 포스트한 게시물  */}
        <PostList
          urlAccountName={urlAccountName}
          onModalHandler={() => {
            setIsPostModalOpen(!isPostModalOpen);
          }}
        />
      </LayoutContent>
      {isProductModalOpen && <BottomModal menu={productModalMenuList} />}
      {isPostModalOpen && (
        <BottomModal
          menu={
            isMyProfile
              ? [
                  {
                    label: "삭제",
                    onClickHandler: () => {
                      onClickBottomModalMenu(
                        "게시글을 삭제할까요?",
                        "삭제",
                        () => {}
                      );
                    },
                  },
                  {
                    label: "수정",
                    onClickHandler: () => {
                      onClickBottomModalMenu("게시글을 수정할까요?", "수정");
                    },
                  },
                ]
              : [
                  {
                    label: "신고하기",
                    onClickHandler: () => {
                      onClickBottomModalMenu("게시글을 신고할까요?", "신고");
                    },
                  },
                ]
          }
        />
      )}
      {isModalOpen && <BottomModal menu={userModalMenuList} />}


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
      />
      <NavBar />
    </Layout>
  );
}
