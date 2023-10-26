import { styled } from "styled-components";
import React, { useState } from "react";
import ImgButton from "../../../assets/img-button.png";
import MyMsgStyle from "./MyMsg";

export default function ChatComment() {
  // 텍스트 입력하면 전송 버튼 활성화(글자 색 변경) 해결해야 함
  //   const [text, enableButton] = useState(["", false]);
  //   const handleTextChange = (event) => {
  //     console.log(text);
  //     if (text[0] === "") {
  //       enableButton([event.target.value, false]);
  //     } else {
  //       enableButton([event.target.value, true]);
  //     }
  //   };
  //   console.log(text);

  //   메시지 전송 - input 태그 값 가져오기
  const [inputValue, setInputValue] = useState("");
  const inputValueChange = (e) => {
    setInputValue(e.target.value);
  };
  const [myMsg, setMyMsg] = useState([]);
  const sendMsg = () => {
    setMyMsg(myMsg.concat(<MyMsgStyle props={inputValue} />));
    setInputValue("");
    console.log(myMsg);
  };

  return (
    <>
      <ChatCommentStyle>
        <ImgStyle src={ImgButton} alt="이미지 불러오기 버튼" />
        <InputText
          id="inputText"
          type="text"
          placeholder="메시지 입력하기.."
          // value={text[0]}
          // onChange={handleTextChange}
          value={inputValue}
          onChange={inputValueChange}
        />
        {/* <CommentButton type="submit" active={text[1]}> */}
        <CommentButton type="submit" onClick={() => sendMsg()}>
          전송
        </CommentButton>
      </ChatCommentStyle>
      {myMsg}
    </>
  );
}

const ChatCommentStyle = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 61px;
  background-color: var(--bg-primary-color);
`;

const ImgStyle = styled.img`
  width: 36px;
  height: 36px;
  margin-top: 13px;
  margin-bottom: 12px;
  margin-left: 16px;
`;

const InputText = styled.input`
  margin-top: 23px;
  margin-bottom: 20px;
  margin-left: 18px;
  border: none;

  &:focus {
    outline: none;
  }
`;

const CommentButton = styled.button`
  position: absolute;
  right: 16px;
  width: 61px;
  height: 61px;
  border: none;
  background-color: transparent;
  color: ${(active) =>
    active ? "var(--font-dark-color)" : "var(--font-orange-color)"};
`;
