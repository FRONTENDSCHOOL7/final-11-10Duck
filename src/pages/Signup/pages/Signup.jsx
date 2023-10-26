import styled from "styled-components";
import Layout from "../../../components/Layout/Layout";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button";
import { useEffect, useState } from "react";
import { COLOR, FONT_SIZE } from "../../../utils";
import { api } from "../../../api/baseURL";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(false);

  const userHandler = (name, value) => {
    setUser({ ...user, [name]: value });
    console.log(user);
    setErrorMsg("");
  };
  useEffect(() => {
    setDisabledBtn(!(user.email && user.password));
  }, [user]);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (!disabledBtn && user.password.length < 6) {
      setErrorMsg("비밀번호는 6자 이상이어야 합니다.");
    } else {
      setErrorMsg("");
    }
  };

  const signupuser = async () => {
    try {
      if (handleButtonClick) {
        const userInfo = user;
        console.log("회원가입 요청 데이터:", userInfo);

        const res = await api.post(`/user`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        alert("회원가입 성공");
        console.log("회원가입 성공:", res);
        navigate("/signin");
      }
    } catch (error) {
      console.error("회원가입 오류:", error);
    }
  };
  useEffect(() => {}, []);

  return (
    <Layout>
      <SignupPage>
        <Title>이메일로 회원가입</Title>
        <Input
          name="email"
          labelText="이메일"
          placeholder="이메일 주소를 입력해 주세요."
          placeholderColor={COLOR.fontLightGrayColor}
          onChangeHandler={(value) => userHandler("email", value)}
        />
        <Input
          name="password"
          type="password"
          labelText="비밀번호"
          placeholder="비밀번호를 설정해 주세요."
          placeholderColor={COLOR.fontLightGrayColor}
          onChangeHandler={(value) => userHandler("password", value)}
          alert={errorMsg}
        />
        <Button
          buttonText="다음"
          disabled={disabledBtn}
          onClick={signupuser}
          reversed={false}
        />
      </SignupPage>
    </Layout>
  );
}

const SignupPage = styled.div`
  margin: 10%;
  & > Button {
    font-size: ${FONT_SIZE.large};
    margin: 0 auto;
    margin-top: 30px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  color: #000000;
  text-align: center;
  margin-bottom: 40px;
`;
