import React from "react";
import Product from "./Product";
import { styled } from "styled-components";
import { FONT_SIZE, COLOR } from "../../utils";

export default function ProductScroller(props) {
  const { products } = props;
  const productList = products.map((item) => (
    <Product key={item.id} product={item} itemId={item.id} />
  ));

  return (
    <Container>
      <HeaderStyle>판매 중인 상품</HeaderStyle>
      <ProductContainerStyle>{productList}</ProductContainerStyle>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${COLOR.bgPrimaryColor};
  margin: 6px 0;
  padding-left: 16px;
`;

const HeaderStyle = styled.div`
  font-size: ${FONT_SIZE.xlarge};
  font-weight: bold;
  padding-top: 20px;
  margin-bottom: 16px;
`;

const ProductContainerStyle = styled.ul`
  display: flex;
  width: 100%;
  overflow-x: auto;
  gap: 0 10px;

  & > li {
    flex-shrink: 0;
  }

  & :last-child {
    padding-right: 8px;
  }
`;
