import { recoilPersist } from "recoil-persist";
const { atom } = require("recoil");
const { persistAtom } = recoilPersist();

export const userState = atom({
  key: "userState",
  default: {
    _id: "",
    username: "",
    email: "",
    accountname: "",
    intro: "",
    image: "",
    token: "",
    refreshToken: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export const stepState = atom({
  key: "stepState",
  default: "splash",
});

export const loadState = atom({
  key: "loadState",
  default: true,
});
