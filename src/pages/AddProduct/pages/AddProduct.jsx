import React from "react";
import Layout from "../../../components/Layout/Layout";
import UploadHeader from "../../../components/Header/UploadHeader";
import LayoutContent from "../../../components/Layout/LayoutContent";
import Input from "../../../components/Input/Input";
import InputImage from "../components/InputImage";
import { styled } from "styled-components";

export default function AddProduct() {
  return (
    <Layout>
      <UploadHeader />
      <LayoutContent>
        <MarginContainer>
          <InputImage />
          <Input labelText="상품명" />
          <Input labelText="가격" />
          <Input labelText="판매 링크" />
        </MarginContainer>
      </LayoutContent>
    </Layout>
  );
}

const MarginContainer = styled.div`
  margin-left: 18px;
  margin-right: 18px;
`;
