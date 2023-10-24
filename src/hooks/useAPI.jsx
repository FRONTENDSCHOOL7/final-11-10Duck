import { useRecoilValue } from "recoil";
import { userState } from "../recoil/atom";

export default function useAPI() {
  const user = useRecoilValue(userState);
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${user.token}`,
  };

  return { header };
}
