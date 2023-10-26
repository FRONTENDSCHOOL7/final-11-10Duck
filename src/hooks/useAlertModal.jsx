import { useState } from "react";

export default function useAlertModal() {
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  const alertModalHandler = {
    openModal: () => {
      setIsAlertModalOpen(true);
    },
    closeModal: () => {
      setIsAlertModalOpen(false);
    },
  };

  return { isAlertModalOpen, alertModalHandler };
}
