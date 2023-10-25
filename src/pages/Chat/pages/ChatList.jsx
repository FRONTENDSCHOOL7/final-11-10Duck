import { styled } from "styled-components";
import BasicHeader from "../../../components/Header/BasicHeader";
import LayoutContent from "../../../components/Layout/LayoutContent";
import NavBar from "../../../components/Footer/NavBar";
import Layout from "../../../components/Layout/Layout";
import ProfileImg from "../../../assets/basic-profile-img.png";
import ChatListData from "../components/ChatListData";
import useModal from "../../../hooks/useModal";
import BottomModal from "../../../components/Modal/BottomModal";

export default function ChatList() {
  const { isModalOpen, userModalMenuList, onModalHandler } = useModal();
  const testUser1 = {
    image: ProfileImg,
    userName: "애월읍 위니브 감귤농장",
    msg: "이번에 정정 언제하맨마씸?",
    date: "2020.10.25",
    unread: 1,
  };
  const testUser2 = {
    image: ProfileImg,
    userName: "제주감귤마을",
    msg: "깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지는 불태워 버렸다.",
    date: "2020.10.25",
    unread: 0,
  };
  return (
    <Layout>
      <BasicHeader mode="chat" onClickMoreBtnHandler={onModalHandler} />
      <LayoutContent>
        <ChatListStyle>
          <ChatListData user={testUser1} />
          <ChatListData user={testUser2} />
        </ChatListStyle>
      </LayoutContent>
      <NavBar />
      {isModalOpen && <BottomModal menu={userModalMenuList} />}
    </Layout>
  );
}

const ChatListStyle = styled.div`
  width: 358px;
  margin-top: 24px;
`;
