import { useState } from "react";

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userModalMenuList = [
    {
      label: "설정 및 개인정보",
      onClickHandler: () => {},
    },
    {
      label: "로그아웃",
      onClickHandler: () => {},
    },
  ];

  const onModalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return { isModalOpen, userModalMenuList, onModalHandler };
}
