const { atom } = require("recoil");

export const userState = atom({
  key: "userState",
  default: {
    _id: "652f8bd5b2cb2056637c46f6",
    username: "10덕",
    email: "10duck@test.com",
    accountname: "10duck",
    intro: "",
    image: "http://146.56.183.55:5050/Ellipse.png",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MmY4YmQ1YjJjYjIwNTY2MzdjNDZmNiIsImV4cCI6MTcwMjc5OTAzMSwiaWF0IjoxNjk3NjE1MDMxfQ.osT2yHu_EcI0sjl8wLqbGJ08zfnaL0aArmHcU_PnfCA",
    refreshToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTc2MTUwMzEsImV4cCI6MTY5ODgyNDYzMX0.95T57cOD_xhs3-NLiCrMIJyGmCdbUY6VaM9YypZ3sUM",
  },
});
