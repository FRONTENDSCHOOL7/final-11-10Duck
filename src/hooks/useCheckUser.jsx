import { useRecoilValue } from "recoil";
import { userState } from "../recoil/atom";
import { useEffect, useState } from "react";

export default function useCheckUser(userId) {
  const user = useRecoilValue(userState);
  const [userFlag, setUserFlag] = useState(false);

  useEffect(() => {
    if (user._id === userId) setUserFlag(true);
  }, []);

  return { userFlag };
}
