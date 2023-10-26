import React from "react";
import { styled } from "styled-components";
import { FONT_SIZE, COLOR } from "../../../utils";

export default function Modal(props) {
  const { name, text1 = "", text2 = "", text3 = "" } = props;
  const textList = [text1, text2, text3]
    .filter(function (item) {
      return item !== null && item !== undefined && item !== "";
    })
    .map((text) => <li>{text}</li>);
  if (name.toUpperCase() === "POST")
    return (
      <PostModal>
        <ul>{textList}</ul>
      </PostModal>
    );
  else if (name.toUpperCase() === "ALERT")
    return (
      <AlertModal>
        <div className="alertText">{text1}</div>
        <div className="buttons">
          <button>{text2}</button>
          <button>{text3}</button>
        </div>
      </AlertModal>
    );
}

const PostModal = styled.div`
  position: absolute;
  width: 390px;
  background: ${COLOR.bgPrimaryColor};
  padding: 16px;

  &::before {
    content: "";
    display: block;
    position: relative;
    width: 50px;
    height: 4px;
    flex-shrink: 0;
    background: ${COLOR.fontLightGrayColor};
    border-radius: 5px;
    margin: 16px auto;
  }

  & > ul > li {
    list-style: none;
    background: ${COLOR.bgPrimaryColor};
    font-size: ${FONT_SIZE.large};
    padding: 14px;
  }
`;

const AlertModal = styled.div`
  width: 252px;
  background: ${COLOR.bgPrimaryColor};
  font-size: ${FONT_SIZE.xlarge};
  text-align: center;
  color: ${COLOR.fontDarkColor};
  border-radius: 10px;
  overflow: hidden;

  & > .alertText {
    padding: 22px;
  }

  & > .buttons {
    width: 100%;
    text-align: center;
    display: flex;
  }

  & > .buttons > button {
    width: 50%;
    height: 46px;
    border: none;
    padding: 0;
    border-top: 0.5px solid #dbdbdb;
    font-size: ${FONT_SIZE.large};
    background: ${COLOR.bgPrimaryColor};
  }

  & > .buttons > button:first-child {
    color: ${COLOR.fontDarkColor};
    border-right: 0.5px solid #dbdbdb;
  }

  & > .buttons > button:last-child {
    color: ${COLOR.fontOrangeColor};
  }
`;
