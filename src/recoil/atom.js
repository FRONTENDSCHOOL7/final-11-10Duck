import { recoilPersist } from "recoil-persist";
import { api } from "../api/baseURL";
const { atom, selector } = require("recoil");
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

export const ssduckUserListState = selector({
  key: "ssduckUserListState",
  get: async () => {
    try {
      const userList = [];
      const res = await api.get(`user/searchuser/?keyword=ssduck`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      res.data &&
        res.data.forEach((user) => {
          user.accountname.includes("ssduck") && userList.push(user);
        });

      console.log("🌟씁덕학개론 유저 목록 불러오기 성공");

      return userList;
    } catch (err) {
      console.error(err);
      console.log("🔥씁덕학개론 유저 목록 불러오기 실패");
    }
  },
});
