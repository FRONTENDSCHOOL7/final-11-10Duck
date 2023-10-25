import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout/Layout";
import BasicHeader from "../../../components/Header/BasicHeader";
import LayoutContent from "../../../components/Layout/LayoutContent";
import NavBar from "../../../components/Footer/NavBar";
import ProfileInfo from "../components/ProfileInfo";
import PostList from "../components/PostList";
import ProductScroller from "../../../components/Product/ProductScroller";
import { api } from "../../../api/baseURL";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil/atom";
import useAPI from "../../../hooks/useAPI";
import BottomModal from "../../../components/Modal/BottomModal";

export default function Profile() {
  const [whosProfile, setWhosProfile] = useState("");
  const [productList, setProductList] = useState();
  const [isBottomModalOpen, setIsBottomModalOpen] = useState(false);

  const user = useRecoilValue(userState);
  const { header } = useAPI();

  const modalMenuList = [
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
    setIsBottomModalOpen(!isBottomModalOpen);
    // 유저가 일치하지 않을 때
    // window.open(link);
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
    // 본인 프로필인지 아니면 타인의 프로필,팔로우 여부 파악해서
    // setWhosProfile( myProfile || isFollow || notFollow )
    // whosProfile 변경
    fetchProduct();
  }, []);

  return (
    <Layout>
      <BasicHeader />
      <LayoutContent isWhite={false} paddingOff={true}>
        {/* 프로필 정보 */}
        <ProfileInfo whosProfile={"notFollow"} />
        {/* 판매 중인 상품 */}
        {!!productList && (
          <ProductScroller
            products={productList}
            onClickHandler={onClickProductHandler}
          />
        )}
        {/* 포스트한 게시물 */}
        {/* <PostList /> */}
      </LayoutContent>
      {isBottomModalOpen && <BottomModal menu={modalMenuList} />}
      <NavBar />
    </Layout>
  );
}
