import React from "react";
import { styled } from "styled-components";
import Header from "./Header";
import Content from "./Content";
import PostImage from "../../assets/post-img-example.png";
import { COLOR } from "../../utils";

export default function Post(props) {
  const { post } = props;

  const testPost = {
    id: String,
    content:
      "옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.",
    image: PostImage,
    createdAt: "2020년 10월 21일",
    updatedAt: "",
    hearted: false,
    heartCount: 58,
    commentCount: 12,
  };

  // 사용할 때는 testPost대신 post를 사용하면 된다.
  return (
    <PostStyle>
      <Header />
      <Content post={testPost} />
    </PostStyle>
  );
}

const PostStyle = styled.article`
  width: 358px;
  background-color: ${COLOR.bgPrimaryColor};
`;
