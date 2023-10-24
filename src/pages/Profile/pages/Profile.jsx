import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout/Layout";
import BasicHeader from "../../../components/Header/BasicHeader";
import LayoutContent from "../../../components/Layout/LayoutContent";
import NavBar from "../../../components/Footer/NavBar";
import ProfileInfo from "../components/ProfileInfo";
import PostList from "../components/PostList";
import ProductScroller from "../../../components/Product/ProductScroller";
import { res } from "../../../constants/product";

export default function Profile() {
  const [whosProfile, setWhosProfile] = useState("");
  useEffect(() => {
    // 본인 프로필인지 아니면 타인의 프로필,팔로우 여부 파악해서
    // setWhosProfile( myProfile || isFollow || notFollow )
    // whosProfile 변경
  }, []);
  return (
    <Layout>
      <BasicHeader />
      <LayoutContent isWhite={false} paddingOff={true}>
        {/* 프로필 정보 */}
        <ProfileInfo whosProfile={"notFollow"} />
        {/* 판매 중인 상품 */}
        <ProductScroller products={res.product} />
        {/* 포스트한 게시물 */}
        <PostList />
      </LayoutContent>
      <NavBar />
    </Layout>
  );
}
