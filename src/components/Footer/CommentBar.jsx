import React, { useState } from 'react';
import { styled } from 'styled-components';
import basicProfile from '../../images/basic-profile.png';

export default function CommentBar({ mode }) {
    //유저 정보 state에서 프로필 이미지 경로 저장
    const profileImgSrc = basicProfile;

    const [textInput, setTextInput] = useState('');

    const inputHandle = (e) => {
        setTextInput(e.target.value);
    };
    const submitHandle = (e) => {
        e.preventDefault();
    };

    return (
        <FormContainer onSubmit={submitHandle}>
            <div>
                <ProfileImg src={profileImgSrc} alt="프로필 이미지" />
                {/* 입력값 길이 늘어났을때 처리 필요 */}
                <label className="a11y-hidden" htmlFor="commentId">
                    댓글 입력하기
                </label>
                <CommentInput type="text" id="commentId" value={textInput} placeholder={mode === 'post' ? '댓글 입력하기...' : '메시지 입력하기...'} onChange={inputHandle} />
            </div>
            <CommentBtn inputLength={textInput.length}>{mode === 'post' ? '게시' : '전송'}</CommentBtn>
        </FormContainer>
    );
}
const FormContainer = styled.form`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 16px;

    border-top: 1px solid var(--font-primary-color);

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
`;
const CommentInput = styled.input`
    border: none;
    margin-left: 18px;

    &::placeholder {
        color: var(--C4C4C4, #c4c4c4);
        font-size: 14px;
    }
`;
const CommentBtn = styled.button`
    border: none;
    background: none;
    color: ${(props) => (props.inputLength === 0 ? `var(--C4C4C4, #c4c4c4)` : `var( --font-orange-color)`)};
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
`;
