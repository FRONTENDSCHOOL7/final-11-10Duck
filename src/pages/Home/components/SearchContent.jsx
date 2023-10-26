import { styled } from "styled-components";
import { FONT_SIZE, COLOR } from "../../../utils";

export default function SearchContent(props) {
  const { user } = props;

  const { image, userName, id } = user;

  return (
    <DataStyle>
      <ImgStyle src={image} alt="프로필 이미지" />
      <div className="ContentStyle">
        <span>{userName}</span>
        <span>{id}</span>
      </div>
    </DataStyle>
  );
}

const DataStyle = styled.div`
  display: flex;

  & > .ContentStyle {
    vertical-align: middle;
  }

  & > .ContentStyle > span {
    display: block;
  }

  & > .ContentStyle > span:first-child {
    font-size: ${FONT_SIZE.large};
    margin-bottom: 6px;
    color: ${COLOR.fontDarkColor};
  }

  & > .ContentStyle > span:last-child {
    font-size: ${FONT_SIZE.medium};
    color: ${COLOR.fontPrimaryColor};
  }
`;

const ImgStyle = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 12px;
`;
