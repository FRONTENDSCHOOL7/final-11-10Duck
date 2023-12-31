import { styled } from "styled-components";
import { FONT_SIZE, COLOR } from "../../../utils";

export default function MsgContainer(props) {
  const { user } = props;
  const { image, msg, time } = user;

  return (
    <MsgContainerStyle>
      <ImgStyle src={image} alt="프로필 이미지" />
      <ContentStyle>{msg}</ContentStyle>
      <TimeStyle>{time}</TimeStyle>
    </MsgContainerStyle>
  );
}

const MsgContainerStyle = styled.div`
  margin-top: 9px;
  margin-bottom: 9px;
  display: flex;
  position: relative;
`;

const ImgStyle = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 100%;
  overflow: hidden;
  object-fit: cover;
`;

const ContentStyle = styled.p`
  width: 240px;
  background-color: ${COLOR.bgPrimaryColor};
  border: 1px solid ${COLOR.bgBorderColor};
  border-radius: 0 10px 10px 10px;
  box-sizing: border-box;
  margin-left: 12px;
  font-size: ${FONT_SIZE.large};
  padding: 12px;
`;

const TimeStyle = styled.p`
  color: ${COLOR.fontPrimaryColor};
  font-size: ${FONT_SIZE.small};
  margin-left: 6px;
  position: absolute;
  left: 300px;
  bottom: 0;
`;
