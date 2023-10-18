import React from "react";
import { styled } from "styled-components";

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
  background: var(--bg-primary-color);
  padding: 16px;

  &::before {
    content: "";
    display: block;
    position: relative;
    width: 50px;
    height: 4px;
    flex-shrink: 0;
    background: #dbdbdb;
    border-radius: 5px;
    margin: 16px auto;
  }

  & > ul > li {
    list-style: none;
    background: var(--bg-primary-color);
    font-size: 14px;
    padding: 14px;
  }
`;

const AlertModal = styled.div`
  width: 252px;
  background: var(--bg-primary-color);
  font-size: 16px;
  text-align: center;
  color: var(--font-dark-color);
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
    font-size: 14px;
    background: var(--bg-primary-color);
  }

  & > .buttons > button:first-child {
    color: var(--font-dark-color);
    border-right: 0.5px solid #dbdbdb;
  }

  & > .buttons > button:last-child {
    color: var(--font-orange-color);
  }
`;
