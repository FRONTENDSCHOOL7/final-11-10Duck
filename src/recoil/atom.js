const { atom } = require("recoil");

export const userState = atom({
  key: "userState",
  default: {
    _id: "",
    username: "",
    email: "",
    accountname: "",
    image: "",
    token: "",
  },
});
