import styled from "styled-components";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const onChangeHandler = (email) => {
    setEmail(email);
  };

  return (
    <Layout>
      <SignupPage>
        <Title>이메일로 회원가입</Title>
        <Input
          labelText="이메일"
          placeholder="이메일 주소를 입력해 주세요."
          onChangeHandler={onChangeHandler}
        />
        <Input
          type="password"
          labelText="비밀번호"
          placeholder="비밀번호를 설정해 주세요."
          onChangeHandler={onChangeHandler}
          alert
        />
        <Button buttonText={"다음"} disabled reversed={false} />
      </SignupPage>
    </Layout>
  );
}

const SignupPage = styled.div`
  margin: 10%;
  & > Button {
    margin: 0 auto;
  }
`;

const Title = styled.div`
  font-size: 24px;
  color: #000000;
  text-align: center;
  margin-bottom: 30px;
`;
