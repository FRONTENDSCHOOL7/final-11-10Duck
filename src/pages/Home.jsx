import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>씁덕학개론</div>
      <Link to="/signin">로그인</Link>
      <Link to="signup">회원가입</Link>
    </>
  );
}
