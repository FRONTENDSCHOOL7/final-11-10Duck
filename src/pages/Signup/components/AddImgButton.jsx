import { styled } from "styled-components";
import AddImgIcon from "../../../assets/upload-file.png";

export default function AddImgButton() {
  return (
    <AddImgContainerStyle>
      <AddImg src={AddImgIcon}></AddImg>
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
  heigth: 36px;
  border-radius: 18px;
  position: absolute;
  bottom: 66px;
  left: 175px;
`;
