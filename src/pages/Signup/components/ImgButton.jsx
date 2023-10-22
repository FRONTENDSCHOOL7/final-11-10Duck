import styled from "styled-components";
import { COLOR } from "../../../utils";

export default function ImgButton(props) {
  const { borderColor, img, text } = props;
  return (
    <ImgButtonStyle borderColor={borderColor}>
      <ButtonImg src={img}></ButtonImg>
      <ButtonText>{text}</ButtonText>
    </ImgButtonStyle>
  );
}

const ImgButtonStyle = styled.button`
  width: 322px;
  height: 44px;
  padding: 10px 20px;
  background-color: ${COLOR.btnSecondaryColor};
  border: 1px solid;
  border-color: ${(props) => props.borderColor};
  border-radius: 44px;
  display: flex;
  align-items: center;
`;

const ButtonImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 20px;
`;

const ButtonText = styled.span`
  margin-left: 30px;
  color: ${COLOR.fontPrimaryColor};
`;
