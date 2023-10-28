import { useState } from "react";

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserAlertModalOpen, setIsUserAlertModalOpen] = useState(false);

  const userAlertModal = {
    alertTitle: "로그아웃 하시겠습니까?",
    leftBtnText: "취소",
    rightBtnText: "로그아웃",
  };

  const userModalMenuList = [
    {
      label: "설정 및 개인정보",
      onClickHandler: () => {},
    },
    {
      label: "로그아웃",
      onClickHandler: () => {
        setIsUserAlertModalOpen(true);
      },
    },
  ];

  const userAlertModalHandler = {
    openModal: () => {},
    closeModal: () => {
      setIsUserAlertModalOpen(false);
      setIsModalOpen(false);
    },
  };

  const onModalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return {
    isModalOpen,
    userAlertModal,
    isUserAlertModalOpen,
    userModalMenuList,
    onModalHandler,
    userAlertModalHandler,
  };
}
