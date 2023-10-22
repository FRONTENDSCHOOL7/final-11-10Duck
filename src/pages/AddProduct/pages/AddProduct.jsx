import React, { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import UploadHeader from "../../../components/Header/UploadHeader";
import LayoutContent from "../../../components/Layout/LayoutContent";
import Input from "../../../components/Input/Input";
import InputImage from "../components/InputImage";
import { styled } from "styled-components";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil/atom";

export default function AddProduct() {
  const [product, setProduct] = useState({
    itemName: "",
    price: "",
    link: "",
    itemImage: "",
  });

  const user = useRecoilValue(userState);

  // 상품 이미지, 상품명, 가격, 판매링크 다 입력되어야 저장버튼 활성화
  const isButtonActive = Object.values(product).every((item) => item.length);

  // 상품명은 2~15자 이내로 입력

  // 가격은 숫자로 입력하면 자동으로 원단위 변환

  /**
   * 판매 등록 페이지
   */
  const uploadProduct = async () => {
    try {
      const res = axios.post(
        `${process.env.REACT_APP_API_URL}product`,
        {
          product,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <UploadHeader
        buttonText={"저장"}
        onClickHandler={uploadProduct}
        disabled={!isButtonActive}
      />
      <LayoutContent>
        <MarginContainer>
          <InputImage />
          <Input
            labelText="상품명"
            onChangeHandler={(itemName) => {
              setProduct({ ...product, itemName });
            }}
          />
          <Input
            labelText="가격"
            value={product.price}
            onChangeHandler={(price) => {
              setProduct({ ...product, price });
            }}
          />
          <Input
            labelText="판매 링크"
            onChangeHandler={(link) => {
              setProduct({ ...product, link });
            }}
          />
        </MarginContainer>
      </LayoutContent>
    </Layout>
  );
}

const MarginContainer = styled.div`
  margin-left: 18px;
  margin-right: 18px;
`;
