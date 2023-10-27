import React from 'react';
import { styled } from 'styled-components';
import ImageIcon from '../../../assets/upload-file.png';

export default function ImageButton(props) {
    const { onChangeHandler, onImageUploadHandler } = props;
    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                onChangeHandler(reader.result);
                resolve();
            };
        });
    };
    return (
        <ButtonContainerStyle>
            <label htmlFor="img-btn">
                <ButtonImageStyle src={ImageIcon} alt="이미지 업로드 버튼 아이콘" />
            </label>
            <ButtonStyle
                type="file"
                id="img-btn"
                accept="image/jpg, image/png, image/jpeg"
                onChange={(event) => {
                    encodeFileToBase64(event.target.files[0]);
                    onImageUploadHandler(event.target.files[0]);
                }}
            />
        </ButtonContainerStyle>
    );
}
const ButtonContainerStyle = styled.span`
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 55%;
`;

const ButtonImageStyle = styled.img`
    width: 36px;
    height: 36px;

    cursor: pointer;
`;

const ButtonStyle = styled.input`
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
`;
