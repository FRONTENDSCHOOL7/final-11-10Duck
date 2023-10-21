import { useNavigate } from "react-router-dom";

export default function useBackPage() {
  const navigate = useNavigate();

  const backPage = () => {
    navigate(-1);
  };

  return { backPage };
}
