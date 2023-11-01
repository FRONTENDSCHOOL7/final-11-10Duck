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
import { useNavigate } from "react-router-dom";
import ImageBalloon from "../components/ImageBalloon";

export default function ChatRoom() {
  const { isModalOpen, onModalHandler } = useModal();
  const [messageList, setMessageList] = useState([]);
  const [input, setInput] = useState("");
  const [srcList, setSrcList] = useState([]);
  const navigate = useNavigate();

  const onImageUploadHandler = (event) => {
    encodeFileToBase64(event.target.files[0]);
    onImageUploadHandler(event.target.files[0]);
    const tempList = srcList;
    setSrcList([]);
    return tempList;
  };

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    // reader.onload = () => {
    // return (
    //   <div>
    //     <img src={reader.result} />
    //   </div>
    // );
    return new Promise((resolve) => {
      reader.onload = () => {
        console.log(reader.result);
        srcList.push(reader.result);
        resolve();
      };
    });
    // };
  };

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
      onClickHandler: () => {
        navigate("/chat");
      },
    },
  ];

  const basicMessageList = [
    {
      image: ProfileImg,
      userName: "이타치",
      msg: "죄송한데 길 좀 물어봐도 될까요",
      time: "13:30",
    },
    {
      image: ProfileImg,
      userName: "이타치",
      msg: "나뭇잎 마을로 가는 길을 까먹었는데 혹시 아세요?",
      time: "13:31",
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
        {srcList.map((item) => {
          <ImageBalloon message={item} />;
        })}
      </LayoutContent>
      <BottomModal
        isModalOpen={isModalOpen}
        menu={modalMenuList}
        onModalHandler={onModalHandler}
      />
      <CommentBar
        onImageUploadHandler={onImageUploadHandler}
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
