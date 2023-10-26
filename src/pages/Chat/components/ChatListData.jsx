import { styled } from "styled-components";
import { FONT_SIZE, COLOR } from "../../../utils";

export default function ChatListData(props) {
  const { user, onClickHandler } = props;
  const { image, userName, msg, date, unread } = user;

  return (
    <ChatListDataStyle onClick={onClickHandler}>
      <ProfileStyle>
        {unread ? <OrangeCircle /> : <></>}
        <ImgStyle src={image} alt="프로필 이미지" />
      </ProfileStyle>

      <ContentStyle>
        <span classNmae="userName">{userName}</span>
        <ContentDataStyle>
          <p className="msg">{msg}</p>
          <span className="date">{date}</span>
        </ContentDataStyle>
      </ContentStyle>
    </ChatListDataStyle>
  );
}

const ChatListDataStyle = styled.div`
  display: flex;
  margin-top: 20px;
  position: relative;
  cursor: pointer;
`;

const ContentStyle = styled.div`
  vertical-align: middle;
  margin-top: 2px;
  clear: left;

  & > .userName {
    display: block;
    font-size: ${FONT_SIZE.large};
    color: ${COLOR.fontDarkColor};
  }
`;

const ContentDataStyle = styled.div`
  display: flex;
  padding-top: 4px;

  & > .msg {
    display: inline-block;
    width: 238px;
    font-size: ${FONT_SIZE.medium};
    color: ${COLOR.fontPrimaryColor};
    /* 말줄임처리 */
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    line-height: 1.5em;
  }

  & > .date {
    font-size: ${FONT_SIZE.small};
    color: ${COLOR.fontLightGrayColor};
    text-align: right;
    padding-left: 13px;
  }
`;

const OrangeCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background-color: ${COLOR.fontOrangeColor};
  position: absolute;
  left: 0;
  top: 0;
`;

const ProfileStyle = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 100%;
  margin: 0 auto;
  position: relative;
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-right: 12px;
`;
