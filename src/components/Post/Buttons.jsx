import React, { useState } from 'react';
import { styled } from 'styled-components';

import Heart from '../../assets/icon/icon-heart.png';
import ActiveHeart from '../../assets/icon/icon-heart-active.png';
import Comment from '../../assets/icon/icon-message-circle.png';
import { COLOR } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api/baseURL';
import useAPI from '../../hooks/useAPI';

export default function Buttons(props) {
    const { postId, authorId, hearted, heartCount, commentCount, fetchFun } = props;
    const [heartSrc, setHeartSrc] = useState(hearted ? ActiveHeart : Heart);

    const { header } = useAPI();

    const navigate = useNavigate();

    const likePost = async () => {
        try {
            const res = await api.post(
                `/post/${postId}/heart`,
                {},
                {
                    headers: header,
                }
            );
            console.log(res);
            console.log('🌟좋아요를 성공');
            setHeartSrc(ActiveHeart);
            fetchFun();
        } catch (err) {
            console.error(err);
            console.log('🔥좋아요를 실패');
        }
    };

    const cancelLikePost = async () => {
        try {
            const res = await api.delete(`/post/${postId}/unheart`, {
                headers: header,
            });

            console.log(res);
            console.log('🌟좋아요 취소를 성공');
            setHeartSrc(Heart);
            fetchFun();
        } catch (err) {
            console.error(err);
            console.log('🔥좋아요 취소를 실패');
        }
    };

    /**
     * 댓글 버튼 클릭 시 해당 게시글로 이동하는 함수
     */
    const onClickCommentBtn = () => {
        navigate(`/post/${postId}`, { state: { authorId } });
    };

    return (
        <ButtonContainerStyle>
            <ButtonStyle
                onClick={() => {
                    if (hearted) {
                        cancelLikePost();
                    } else {
                        likePost();
                    }
                }}
            >
                <ButtonIconStyle src={heartSrc} alt="좋아요 버튼의 하트 이미지" />
                <CommentCountStyle>{heartCount}</CommentCountStyle>
            </ButtonStyle>
            <ButtonStyle onClick={onClickCommentBtn}>
                <ButtonIconStyle src={Comment} alt="댓글 버튼의 댓글 아이콘 이미지" />
                <CommentCountStyle>{commentCount}</CommentCountStyle>
            </ButtonStyle>
        </ButtonContainerStyle>
    );
}

const ButtonContainerStyle = styled.section`
    display: flex;
    margin-top: 12px;
    margin-bottom: 16px;
`;

const ButtonStyle = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    margin: 0;
    margin-right: 16px;
    padding: 0;
    cursor: pointer;
`;

const ButtonIconStyle = styled.img`
    width: 20px;
    height: 20px;
    object-fit: cover;
`;

const CommentCountStyle = styled.div`
    color: ${COLOR.fontPrimaryColor};
    font-size: 12px;
    margin-left: 6px;
`;
