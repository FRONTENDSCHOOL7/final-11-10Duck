import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import MainHeader from "../../../components/Header/MainHeader";
import NavBar from "../../../components/Footer/NavBar";
import Input from "../../../components/Input/Input";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <Layout bgColor={"white"}>
      <MainHeader />

      <LayoutContent>
        <div>씁덕학개론</div>
        <Link to="/signin">로그인</Link>
        <Link to="signup">회원가입</Link>
        <Button />
        <Input
          type="text"
          labelText="이메일"
          onChangeHandler={(event) => {
            setEmail(event.target.value);
          }}
        />
        <Input type="password" labelText="비밀번호" />
      </LayoutContent>

      <NavBar />
    </Layout>
  );
}
