import React from 'react';
import { styled } from 'styled-components';
import { AddAPIURLImage } from '../../../utils/function';
import { useNavigate } from 'react-router-dom';

export default function Gallery({ post }) {
    const navigate = useNavigate();

    return (
        <Album
            src={AddAPIURLImage(post.image)}
            alt={`${post.username}의 포스트 이미지`}
            onClick={() => {
                navigate(`/post/${post.id}`);
            }}
        />
    );
}

const Album = styled.img`
    width: 114px;
    height: 114px;
    cursor: pointer;
`;
