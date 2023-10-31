const { atom } = require("recoil");

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
});

export const loadState = atom({
  key: "loadState",
  default: true,
});
