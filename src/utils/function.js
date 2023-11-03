import { api } from "../api/baseURL";

/**
 * 숫자 입력 시 원화단위로 표기해주는 함수
 * @param {숫자} str
 * @returns
 */
export const inputPriceFormat = (str) => {
  const comma = (str) => {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
  };
  const uncomma = (str) => {
    str = String(str);
    return str.replace(/[^\d]+/g, "");
  };
  return comma(uncomma(str));
};

/**
 * 이미지 파일을 api 통해서 변환해주는 함수
 * @param {이미지 파일} imageFile
 * @returns
 */
export const changeImageToURL = async (imageFile) => {
  try {
    const res = await api.post(
      "/image/uploadfile",
      {
        image: imageFile,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return res.data.filename;
  } catch (err) {
    console.error(err);
  }
};

/**
 * api에서 받아온 프로필 이미지를 보여줄 수 있는 url로 변경하는 함수
 * @param {프로필 이미지} imageURL
 * @returns
 */
export const changeProfileImage = (imageURL) => {
  return process.env.REACT_APP_API_URL + "/" + imageURL.split("5050/")[1];
};

export const AddAPIURLImage = (filename) => {
  return process.env.REACT_APP_API_URL + "/" + filename;
};

/**
 * xxxx년 xx월 xx일로 변환하는 함수
 * @param {date 객체} date
 * @returns
 */
export const formatDate = (date) => {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
};

/**
 * 몇시간전, 몇분전, 몇일전으로 변환해주는 함수
 * @param {날짜} date
 * @returns
 */
export const elapsedTime = (date) => {
  const start = new Date(date);
  const end = new Date();

  const seconds = Math.floor((end.getTime() - start.getTime()) / 1000);
  if (seconds < 60) return "방금 전";

  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;

  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;

  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)}일 전`;

  return `${start.toLocaleDateString()}`;
};
