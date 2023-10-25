import { styled } from "styled-components";
import React, { useState } from "react";
import ImgButton from "../../../assets/img-button.png";
import { FONT_SIZE, COLOR } from "../../../utils";

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

  //   전송 버튼을 누르면 input 태그 값을 가져와서 메시지로 전송
  const [message, setMessage] = useState([]);
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleUpload = () => {
    setMessage((prevState) => {
      let temp = input;
      setInput("");
      return [...prevState, temp];
    });
  };

  return (
    <>
      <ChatCommentStyle>
        <ImgStyle src={ImgButton} alt="이미지 불러오기 버튼" />
        <InputText
          id="inputText"
          type="text"
          placeholder="메시지 입력하기.."
          value={input}
          onChange={handleInputChange}
        />
        <CommentButton type="submit" onClick={handleUpload}>
          전송
        </CommentButton>
      </ChatCommentStyle>
      {message.map((msg, idx) => {
        return (
          <MyMsgStyle key={idx}>
            <span>{msg}</span>
          </MyMsgStyle>
        );
      })}
    </>
  );
}

const ChatCommentStyle = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 61px;
  background-color: ${COLOR.bgPrimaryColor};
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
  color: ${(active) => (active ? COLOR.fontDarkColor : COLOR.fontOrangeColor)};

  &:focus {
    border: none;
  }
`;

const MyMsgStyle = styled.div`
  margin-top: 0.5em;
  text-align: right;

  & > span {
    display: inline-block;
    padding: 12px;
    right: 16px;

    background-color: ${COLOR.fontOrangeColor};
    border-radius: 10px 0 10px 10px;
    color: ${COLOR.fontSecondaryColor};
    font-size: ${FONT_SIZE.large};
  }
`;
