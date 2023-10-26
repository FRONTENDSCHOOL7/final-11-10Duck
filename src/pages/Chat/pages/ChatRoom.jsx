import BasicHeader from "../../../components/Header/BasicHeader";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import MsgContainer from "../components/MsgContainer";
import ProfileImg from "../../../assets/basic-profile-img.png";
import useModal from "../../../hooks/useModal";
import BottomModal from "../../../components/Modal/BottomModal";
import CommentBar from "../../../components/Footer/CommentBar";
import { useState } from "react";
import ChatBalloon from "../components/ChatBalloon";

export default function ChatRoom() {
  const { isModalOpen, onModalHandler } = useModal();
  const [messageList, setMessageList] = useState([]);
  const [input, setInput] = useState("");

  const onChangeHandler = (value) => {
    setInput(value);
  };

  const onSubmitHandler = () => {
    const tempMessageList = messageList;
    tempMessageList.push(input);
    setMessageList(tempMessageList);
    setInput("");
  };

  const modalMenuList = [
    {
      label: "채팅방 나가기",
      onClickHandler: () => {},
    },
  ];

  const basicMessageList = [
    {
      image: ProfileImg,
      userName: "애월읍 위니브 감귤농장",
      msg: "옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.",
      time: "12:39",
    },
    {
      image: ProfileImg,
      userName: "애월읍 위니브 감귤농장",
      msg: "안녕하세요. 감귤 사고싶어요요요요요",
      time: "12:41",
    },
  ];

  return (
    <Layout>
      <BasicHeader mode="chat" onClickMoreBtnHandler={onModalHandler} />
      <LayoutContent>
        {basicMessageList.map((item) => (
          <MsgContainer key={item.id} user={item} />
        ))}
        {messageList.map((item) => (
          <ChatBalloon message={item} />
        ))}
      </LayoutContent>
      {isModalOpen && <BottomModal menu={modalMenuList} />}
      <CommentBar
        onImageUploadHandler={() => {}}
        mode="chat"
        content={input}
        onSubmitHandler={onSubmitHandler}
        onChangeHandler={(e) => {
          onChangeHandler(e.target.value);
        }}
      />
    </Layout>
  );
}
