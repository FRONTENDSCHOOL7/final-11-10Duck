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
