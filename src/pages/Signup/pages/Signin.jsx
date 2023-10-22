import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input/Input";
import Layout from "../../../components/Layout/Layout";
import styled from "styled-components";

export default function Signin() {
  return (
    <Layout>
      <SigninPage>
        <Title>로그인</Title>
        <Input labelText="이메일" />
        <Input type="password" labelText="비밀번호" />
        <Button buttonText="로그인" disabled />
        <StyledLink to="/signup">이메일로 회원가입</StyledLink>
      </SigninPage>
    </Layout>
  );
}

const SigninPage = styled.div`
  margin: 10%;
  & > Button {
    margin: 0 auto;
    margin-bottom: 20px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  color: #000000;
  text-align: center;
  margin-bottom: 30px;
`;

const StyledLink = styled(Link)`
  text-align: center;
  margin-left: 80px;
`;
