import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout/Layout";
import BasicHeader from "../../../components/Header/BasicHeader";
import LayoutContent from "../../../components/Layout/LayoutContent";
import NavBar from "../../../components/Footer/NavBar";
import ProfileInfo from "../components/ProfileInfo";
import PostList from "../components/PostList";
import ProductScroller from "../../../components/Product/ProductScroller";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil/atom";
import { useParams } from "react-router-dom";
import useAPI from "../../../hooks/useAPI";
import { api } from "../../../api/baseURL";
import BottomModal from "../../../components/Modal/BottomModal";
import useModal from "../../../hooks/useModal";

export default function Profile() {
  const { header } = useAPI();
  const { accountName } = useParams();
  const user = useRecoilValue(userState);

  const [urlAccountName, setUrlAccountName] = useState(
    accountName ? accountName : user.accountname
  );
  const [isMyProfile, setIsMyProfile] = useState(null);
  const [isFollow, setIsFollow] = useState(null);
  const [profileInfo, serProfileInfo] = useState({});
  const [productList, setProductList] = useState();
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const { isModalOpen, userModalMenuList, onModalHandler } = useModal();

  const productModalMenuList = [
    {
      label: "삭제",
      onClickHandler: () => {},
    },
    {
      label: "수정",
      onClickHandler: () => {},
    },
    {
      label: "웹사이트에서 상품보기",
      onClickHandler: () => {},
    },
  ];

  const onClickProductHandler = (link) => {
    // 유저가 일치할 때
    setIsProductModalOpen(!isProductModalOpen);
    // 유저가 일치하지 않을 때
    // window.open(link);
  };

  const changeProfileInfo = (info) => {
    serProfileInfo(info);
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
      serProfileInfo(res.data.profile);
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
      const res = await api.get(`/product/${user.accountname}`, {
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
  }, [urlAccountName]);
  return (
    <Layout>
      <BasicHeader mode={"post"} onClickMoreBtnHandler={onModalHandler} />
      <LayoutContent isWhite={false} paddingOff={true}>
        {/* 프로필 정보 */}
        <ProfileInfo
          isMyProfile={isMyProfile}
          profileInfo={profileInfo}
          isFollow={isFollow}
          changeProfileInfo={changeProfileInfo}
          changeIsFollow={changeIsFollow}
        />
        {/* 판매 중인 상품 */}
        {!!productList && (
          <ProductScroller
            products={productList}
            onClickHandler={onClickProductHandler}
          />
        )}
        {/* 포스트한 게시물  */}
        <PostList urlAccountName={urlAccountName} />
      </LayoutContent>
      {isProductModalOpen && <BottomModal menu={productModalMenuList} />}
      {isModalOpen && <BottomModal menu={userModalMenuList} />}
      <NavBar />
    </Layout>
  );
}
