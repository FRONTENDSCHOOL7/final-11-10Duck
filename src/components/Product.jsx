import React from "react";
import { styled } from "styled-components";
import TestImage from "../assets/product-img-example.png";
import { useNavigate } from "react-router-dom";
import { COLOR } from "../utils";

export default function Product(props) {
  const { product } = props;
  // 상품 api 참고
  const { id, itemName, price, link, itemImage } = product;
  const navigate = useNavigate();

  /**
   * 판매사이트로 이동하는 함수
   */
  const moveToProductPage = () => {
    navigate(link);
  };

  return (
    <ProductStyle onClick={moveToProductPage}>
      <ProductImage src={TestImage} alt="상품 이미지" />
      <ProductName>{itemName}</ProductName>
      <ProductPrice>{`${price.toLocaleString("ko-KR")}원`}</ProductPrice>
    </ProductStyle>
  );
}

// 더 적절한 태그가 있는지 생각하기
const ProductStyle = styled.li`
  width: 140px;
  height: 132px;
  background-color: ${COLOR.bgPrimaryColor};
  list-style: none;
  cursor: pointer;
`;

const ProductImage = styled.img`
  width: 140px;
  height: 90px;
  border-radius: 8px;
  object-fit: cover;
`;

const ProductName = styled.div`
  font-size: 14px;
  color: ${COLOR.fontDarkColor};
  margin: 6px 2px 0 2px;

  /* 말줄임표 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductPrice = styled.div`
  font-size: 12px;
  color: ${COLOR.fontOrangeColor};
  font-weight: bold;
  margin: 4px 2px 0 2px;
`;
