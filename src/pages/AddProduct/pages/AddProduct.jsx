import React, { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import UploadHeader from "../../../components/Header/UploadHeader";
import LayoutContent from "../../../components/Layout/LayoutContent";
import Input from "../../../components/Input/Input";
import InputImage from "../components/InputImage";
import { styled } from "styled-components";
import { changeImageToURL, inputPriceFormat } from "../../../utils/function";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/baseURL";
import useAPI from "../../../hooks/useAPI";

export default function AddProduct() {
  const [product, setProduct] = useState({
    itemName: "",
    price: "",
    link: "",
    itemImage: "",
  });

  const { header } = useAPI();

  const navigate = useNavigate();

  const onImageUploadHandler = (value) => {
    setProduct({ ...product, itemImage: value });
  };

  const isButtonActive = Object.values(product).every((item) => !!item);

  /**
   * 판매 등록 함수
   */
  const uploadProduct = async () => {
    try {
      const imageURL = await changeImageToURL(product.itemImage);
      const tempProduct = product;
      tempProduct.itemImage = imageURL;
      tempProduct.price = parseInt(tempProduct.price.replaceAll(",", ""), 10);

      const res = await api.post(
        "/product",
        {
          product: tempProduct,
        },
        {
          headers: header,
        }
      );

      console.log("상품등록 성공");
      console.log(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      navigate("/profile");
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
          <InputImage onImageUploadHandler={onImageUploadHandler} />
          <Input
            labelText="상품명"
            maxLength={15}
            onChangeHandler={(event) => {
              if (
                event.target.value.length > 1 &&
                event.target.value.length < 16
              ) {
                setProduct({ ...product, itemName: event.target.value });
              }
            }}
          />
          <Input
            labelText="가격"
            value={product.price}
            onChangeHandler={(event) => {
              setProduct({
                ...product,
                price: inputPriceFormat(event.target.value),
              });
            }}
          />
          <Input
            labelText="판매 링크"
            onChangeHandler={(event) => {
              setProduct({ ...product, link: event.target.value });
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
