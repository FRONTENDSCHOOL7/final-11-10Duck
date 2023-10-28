import React from "react";
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

  return (
    <FormContainer>
      <div>
        <ProfileImg
          mode={mode}
          onClick={onImageUploadHandler}
          src={mode === "chat" ? ImageBtn : user.image}
          alt="프로필 이미지"
        />
        {/* 입력값 길이 늘어났을때 처리 필요 */}
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
      </div>
      <CommentBtn
        inputLength={content}
        onClick={(e) => {
          e.preventDefault();
          onSubmitHandler();
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

  &::placeholder {
    color: var(--C4C4C4, #c4c4c4);
    font-size: 14px;
  }

  &:focus {
    outline: none;
  }
`;
const CommentBtn = styled.button`
  border: none;
  background: none;
  color: ${(props) =>
    !props.inputLength ? `var(--C4C4C4, #c4c4c4)` : `${COLOR.fontOrangeColor}`};
  font-size: ${FONT_SIZE.large};
  font-weight: 500;
  cursor: ${(props) => props.inputLength && "pointer"};
`;
