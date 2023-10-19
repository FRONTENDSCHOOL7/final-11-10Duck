import React from "react";
import Layout from "../../../components/Layout/Layout";
import UploadHeader from "../../../components/Header/UploadHeader";
import LayoutContent from "../../../components/Layout/LayoutContent";
import Input from "../../../components/Input/Input";
import InputImage from "../components/InputImage";

export default function AddProduct() {
  return (
    <Layout>
      <UploadHeader />
      <LayoutContent>
        <InputImage />
        <Input labelText="상품명" />
        <Input labelText="가격" />
        <Input labelText="판매 링크" />
      </LayoutContent>
    </Layout>
  );
}
