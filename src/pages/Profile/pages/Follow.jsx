import React from "react";
import { styled } from "styled-components";
import { COLOR, FONT_SIZE } from "../../../utils";
import { useParams } from "react-router-dom";
import Layout from "../../../components/Layout/Layout";
import BasicHeader from "../../../components/Header/BasicHeader";
import LayoutContent from "../../../components/Layout/LayoutContent";
import NavBar from "../../../components/Footer/NavBar";
import FollowUser from "../components/FollowUser";
import useModal from "../../../hooks/useModal";
import BottomModal from "../../../components/Modal/BottomModal";

export default function Follow() {
  const { followMode } = useParams();
  const { isModalOpen, userModalMenuList, onModalHandler } = useModal();

  return (
    <Layout>
      <BasicHeader
        isFollowersPage={true}
        followMode={followMode}
        onClickMoreBtnHandler={onModalHandler}
      />
      <LayoutContent>
        <FollowUser />
        <FollowUser />
        <FollowUser />
      </LayoutContent>
      <NavBar />
      {isModalOpen && <BottomModal menu={userModalMenuList} />}
    </Layout>
  );
}
