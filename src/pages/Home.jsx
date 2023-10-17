import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
  const onClickHandler = () => {
    console.log("Click!!");
  };
  return (
    <>
      <div>씁덕학개론</div>
      <Link to="/signin">로그인</Link>
      <Link to="signup">회원가입</Link>
      <Button buttonText={"로그인"} disabled={true} size="m" />
      <Button buttonText={"로그인"} size="s" onClickHandler={onClickHandler} />
      <Button
        buttonText={"로그인"}
        reversed={true}
        onClickHandler={onClickHandler}
      />
    </>
  );
}
