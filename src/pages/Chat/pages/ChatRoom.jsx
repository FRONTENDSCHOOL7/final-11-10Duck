import BasicHeader from "../../../components/Header/BasicHeader";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import MsgContainer from "../components/MsgContainer";
import ProfileImg from "../../../assets/basic-profile-img.png";
import ChatComment from "../components/ChatComment";
import useModal from "../../../hooks/useModal";
import BottomModal from "../../../components/Modal/BottomModal";

export default function ChatRoom() {
  const { isModalOpen, userModalMenuList, onModalHandler } = useModal();
  const testUser = {
    image: ProfileImg,
    userName: "애월읍 위니브 감귤농장",
    msg: "옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.",
    time: "12:39",
  };
  const testUserNew = {
    image: ProfileImg,
    userName: "애월읍 위니브 감귤농장",
    msg: "안녕하세요. 감귤 사고싶어요요요요요",
    time: "12:41",
  };

  return (
    <Layout>
      {/* 배경색 바꿔야 함 */}
      <BasicHeader mode="chat" onClickMoreBtnHandler={onModalHandler} />
      <LayoutContent>
        <MsgContainer user={testUser} />
        <MsgContainer user={testUserNew} />
        <ChatComment />
      </LayoutContent>
      {isModalOpen && <BottomModal menu={userModalMenuList} />}
    </Layout>
  );
}
