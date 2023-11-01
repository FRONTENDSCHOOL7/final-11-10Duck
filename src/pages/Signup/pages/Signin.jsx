import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input/Input";
import Layout from "../../../components/Layout/Layout";
import styled from "styled-components";
import { COLOR, FONT_SIZE } from "../../../utils";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "../../../recoil/atom";
import { api } from "../../../api/baseURL";

export default function Signin() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const setUser = useSetRecoilState(userState);

  const navigate = useNavigate();

  const isButtonActive = Object.values(userData).every((item) => !!item.length);

  const signIn = async () => {
    try {
      const res = await api.post(
        "/user/login",
        {
          user: {
            email: userData.email,
            password: userData.password,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data.message);
      if (res.data.message === "이메일 또는 비밀번호가 일치하지 않습니다.") {
        setErrorMsg("*이메일  또는 비밀번호가 일치하지 않습니다. ");
      } else {
        setErrorMsg("");
      }
      console.log("🌟로그인 성공");
      localStorage.setItem("token", res.data.user.token);
      setUser(res.data.user);
      navigate("/");
    } catch (err) {
      console.error(err);
      console.log("🔥로그인 실패");
    }
  };

  return (
    <Layout>
      <SigninPage>
        <Title>로그인</Title>
        <Input
          labelText="이메일"
          onChangeHandler={(event) => {
            setUserData({ ...userData, email: event.target.value });
          }}
        />
        <Input
          type="password"
          labelText="비밀번호"
          onChangeHandler={(event) => {
            setUserData({ ...userData, password: event.target.value });
          }}
          alert={errorMsg}
        />
        <Button
          buttonText="로그인"
          onClickHandler={signIn}
          disabled={!isButtonActive}
        />
        <LinkStyle to="/signup">이메일로 회원가입</LinkStyle>
      </SigninPage>
    </Layout>
  );
}

const SigninPage = styled.div`
  margin: 10%;
  & > Button {
    font-size: ${FONT_SIZE.large};
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  color: #000000;
  text-align: center;
  margin-bottom: 40px;
  font-family: "PyeongChangPeace-Bold";
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  text-align: center;
  margin-left: 100px;
  color: ${COLOR.fontPrimaryColor};
  font-size: ${FONT_SIZE.medium};
`;
