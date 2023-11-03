import { styled } from "styled-components";
import BasicHeader from "../../../components/Header/BasicHeader";
import LayoutContent from "../../../components/Layout/LayoutContent";
import NavBar from "../../../components/Footer/NavBar";
import Layout from "../../../components/Layout/Layout";
import ProfileImg from "../../../assets/basic-profile-img.png";
import ChatListData from "../components/ChatListData";
import useModal from "../../../hooks/useModal";
import BottomModal from "../../../components/Modal/BottomModal";
import { useNavigate } from "react-router-dom";
import AlertModal from "../../../components/Modal/AlertModal";
import { useSetRecoilState } from "recoil";
import { stepState, userState } from "../../../recoil/atom";

export default function ChatList() {
  const setUser = useSetRecoilState(userState);
  const setStep = useSetRecoilState(stepState);
  const {
    isModalOpen,
    isUserAlertModalOpen,
    userAlertModal,
    userModalMenuList,
    onModalHandler,
    userAlertModalHandler,
  } = useModal();

  const navigate = useNavigate();

  const chatList = [
    {
      id: 1,
      image: ProfileImg,
      userName: "이타치",
      msg: "죄송한데 길 좀 물어봐도 될까요",
      date: "2023.11.09",
      unread: 1,
    },
    {
      id: 2,
      image: ProfileImg,
      userName: "루피",
      msg: "빅맘이 너 소개시켜 달라는데 괜찮음?",
      date: "2023.11.08",
      unread: 0,
    },
  ];
  return (
    <Layout>
      <BasicHeader mode="chat" onClickMoreBtnHandler={onModalHandler} />
      <LayoutContent>
        <ChatListStyle>
          {chatList.map((item) => (
            <ChatListData
              key={item.id}
              user={item}
              onClickHandler={() => {
                navigate("/chat/chatroom");
              }}
            />
          ))}
        </ChatListStyle>
      </LayoutContent>
      <AlertModal
        isModalOpen={isUserAlertModalOpen}
        alertTitle={userAlertModal.alertTitle}
        leftBtnText={userAlertModal.leftBtnText}
        rightBtnText={userAlertModal.rightBtnText}
        onModalHandler={userAlertModalHandler}
        onClickRightBtnHandler={() => {
          setUser({
            _id: "",
            username: "",
            email: "",
            accountname: "",
            intro: "",
            image: "",
            token: "",
            refreshToken: "",
          });
          localStorage.removeItem("token");
          setStep("splash");
          navigate("/");
        }}
      />
      <NavBar />
      <BottomModal
        isModalOpen={isModalOpen}
        menu={userModalMenuList}
        onModalHandler={onModalHandler}
      />
    </Layout>
  );
}

const ChatListStyle = styled.div`
  width: 358px;
  margin-top: 24px;
`;
