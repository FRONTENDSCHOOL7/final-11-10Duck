import { styled } from 'styled-components';
import AddImgIcon from '../../../assets/upload-file.png';

export default function AddImgButton(props) {
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
        <AddImgContainerStyle>
            <label htmlFor="img-btn">
                <AddImg src={AddImgIcon} alt="이미지 업로드 버튼 아이콘" />
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
        </AddImgContainerStyle>
    );
}

const AddImgContainerStyle = styled.div`
    height: 36px;
    width: 36px;
    display: inline-block;
    position: absolute;
`;

const AddImg = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    position: absolute;
    bottom: 66px;
    left: 175px;
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
