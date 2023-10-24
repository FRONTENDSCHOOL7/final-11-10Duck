import styled from "styled-components";
import { COLOR, FONT_SIZE } from "../../../utils";

export default function SelectButton(props) {
  const { borderColor, img, text } = props;
  return (
    <SelectButtonStyle borderColor={borderColor}>
      <SelectButtonImg src={img}></SelectButtonImg>
      <SelectButtonText>{text}</SelectButtonText>
    </SelectButtonStyle>
  );
}

const SelectButtonStyle = styled.button`
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

const SelectButtonImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 20px;
`;

const SelectButtonText = styled.span`
  font-size: ${FONT_SIZE.large};
  margin-left: 30px;
  color: ${COLOR.fontPrimaryColor};
`;
