import { styled } from "styled-components";

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
    font-size: 14px;
    margin-bottom: 6px;
    color: var(--font-dark-color);
  }

  & > .ContentStyle > span:last-child {
    font-size: 12px;
    color: var(--font-primary-color);
  }
`;

const ImgStyle = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 12px;
`;
