import React from "react";
import { styled } from "styled-components";
import { COLOR } from "../../utils";

export default function Product(props) {
  const { product, onClickHandler } = props;
  // 상품 api 참고
  const { id, itemName, price, link, itemImage } = product;

  /**
   * 이미지 url 수정하는 함수
   * @param {api에서 받아온 이미지} imageURL
   * @returns
   */
  const makeImageURL = (imageURL) => {
    return process.env.REACT_APP_API_URL + "/" + imageURL;
  };

  return (
    <ProductStyle
      key={id}
      onClick={() => {
        onClickHandler(link);
      }}
    >
      <ProductImage src={makeImageURL(itemImage)} alt="상품 이미지" />
      <ProductName>{itemName}</ProductName>
      <ProductPrice>{`${price.toLocaleString("ko-KR")}원`}</ProductPrice>
    </ProductStyle>
  );
}

const ProductStyle = styled.li`
  width: 140px;
  height: 132px;
  background-color: ${COLOR.bgPrimaryColor};
  list-style: none;
  cursor: pointer;
  margin-bottom: 21px;
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
