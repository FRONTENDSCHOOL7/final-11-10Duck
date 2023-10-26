import { styled } from "styled-components";

export default function MsgContainer(props) {
  const { user } = props;
  const { image, userName, msg, time } = user;

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
  background-color: var(--bg-primary-color);
  border: 1px solid #c4c4c4;
  border-radius: 0 10px 10px 10px;
  box-sizing: border-box;
  margin-left: 12px;
  font-size: 14px;
  padding: 12px;
`;

const TimeStyle = styled.p`
  color: var(--font-primary-color);
  font-size: 10px;
  margin-left: 6px;
  position: absolute;
  left: 300px;
  bottom: 0;
`;
