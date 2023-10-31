import styled from "styled-components";
import Layout from "../../../components/Layout/Layout";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button";
import { useEffect, useState } from "react";
import { COLOR, FONT_SIZE } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/baseURL";

export default function Signup() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [emailDuplicate, setEmailDuplicate] = useState(false);

  const navigate = useNavigate();

  const checkEmail = async () => {
    try {
      const res = await api.post(
        "/user/emailvalid",
        {
          user: {
            email: user.email,
          },
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      console.log(res.data.message);
      if (res.data.message === "이미 가입된 이메일 주소 입니다.") {
        setEmailErrorMsg("*이미 가입된 이메일 주소입니다.");
        setDisabledBtn(true);
        setEmailDuplicate(true);
      } else {
        setEmailErrorMsg("");
        setDisabledBtn(false);
        setEmailDuplicate(false);
      }
    } catch (error) {
      console.log(error);
      console.log("🔥이메일확인 실패");
    }
  };

  function validateForm() {
    if (emailDuplicate) {
    } else if (user.password && user.password.length < 6) {
      setDisabledBtn(true);
      setErrorMsg("*비밀번호는 6자 이상이어야 합니다.");
    } else if (user.email && user.password && user.password.length >= 6) {
      setDisabledBtn(false);
      setErrorMsg("");
    } else {
      setDisabledBtn(true);
      setErrorMsg("");
    }
  }

  useEffect(() => {
    validateForm();
    checkEmail();
  });

  return (
    <Layout>
      <SignupPage>
        <Title>이메일로 회원가입</Title>
        <Input
          name="email"
          labelText="이메일"
          placeholder="이메일 주소를 입력해 주세요."
          placeholderColor={COLOR.fontLightGrayColor}
          onChangeHandler={(event) => {
            setUser({ ...user, email: event.target.value });
          }}
          alert={emailErrorMsg}
        />
        <Input
          name="password"
          type="password"
          labelText="비밀번호"
          placeholder="비밀번호를 설정해 주세요."
          placeholderColor={COLOR.fontLightGrayColor}
          onChangeHandler={(event) => {
            setUser({ ...user, password: event.target.value });
          }}
          alert={errorMsg}
        />
        <Button
          buttonText="다음"
          disabled={disabledBtn}
          onClickHandler={() => {
            if (!disabledBtn) {
              navigate("/signup/edit-profile", { state: { user } });
            }
          }}
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
