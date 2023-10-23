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
