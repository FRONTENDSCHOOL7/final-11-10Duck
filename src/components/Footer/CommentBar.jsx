import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { COLOR, FONT_SIZE } from "../../utils";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/atom";
import ImageBtn from "../../assets/img-button.png";

export default function CommentBar({
  mode,
  content,
  onChangeHandler,
  onSubmitHandler,
  onImageUploadHandler,
}) {
  const user = useRecoilValue(userState);

  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    setTextInput(content);
  }, [content]);
  return (
    <FormContainer>
      <InputStyle>
        {mode === "chat" ? (
          <ImgUploadBtn
            type="file"
            accept="mage/jpg, image/png, image/jpeg"
            onChange={onImageUploadHandler}
          />
        ) : (
          <></>
        )}
        <ProfileImg
          mode={mode}
          onClick={onImageUploadHandler}
          src={mode === "chat" ? ImageBtn : user.image}
          alt="프로필 이미지"
        />

        <label className="a11y-hidden" htmlFor="commentId">
          댓글 입력하기
        </label>
        <CommentInput
          type="text"
          id="commentId"
          value={content}
          placeholder={
            mode === "post" ? "댓글 입력하기..." : "메시지 입력하기..."
          }
          onChange={onChangeHandler}
        />
      </InputStyle>
      <CommentBtn
        inputLength={content}
        onClick={(e) => {
          e.preventDefault();
          textInput.length > 0 && onSubmitHandler();
        }}
      >
        {mode === "post" ? "게시" : "전송"}
      </CommentBtn>
    </FormContainer>
  );
}
const FormContainer = styled.form`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 16px;
  border-top: 1px solid ${COLOR.bgBorderColor};
  background-color: ${COLOR.bgPrimaryColor};
  box-sizing: border-box;

  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;
const InputStyle = styled.div`
  display: flex;
  flex-grow: 1;
`;
const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 36px;
  vertical-align: middle;

  cursor: ${(props) => (props.mode === "chat" ? "pointer" : "")};
`;
const CommentInput = styled.input`
  border: none;
  margin-left: 18px;
  background-color: ${COLOR.bgPrimaryColor};
  width: 100%;

  &::placeholder {
    color: ${COLOR.fontLightGrayColor};
    font-size: ${FONT_SIZE.large};
  }

  &:focus {
    outline: none;
  }
`;
const CommentBtn = styled.button`
  border: none;
  background: none;
  color: ${(props) =>
    !props.inputLength
      ? `${COLOR.borderPrimaryColor}`
      : `${COLOR.btnPrimaryColor}`};
  font-size: ${FONT_SIZE.large};
  font-weight: 500;
  cursor: ${(props) => props.inputLength && "pointer"};
  font-family: "PyeongChangPeace";
`;

const ImgUploadBtn = styled.input`
  width: 36px;
  height: 36px;
  border-radius: 36px;
  vertical-align: middle;
  position: absolute;
  opacity: 0;
  filter: Alpha(style=0, opacity=0);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
