import { styled } from "styled-components";

export default function MyMsg(props) {
  console.log("props", props);
  const text = JSON.stringify(Object.values(props));
  const msg = text.slice(2, -2);
  console.log("msg" + msg);

  return (
    <MyMsgStyle>
      {/* <p className="msg">{msg}</p> */}
      {msg}
    </MyMsgStyle>
  );
}

const MyMsgStyle = styled.li`
  list-style: none;
  position: absolute;
  right: 16px;
  /* top: 0; */
  margin-top: 10px;
  /* line-height: 150%; */

  padding: 12px;
  border: none;
  background-color: skyblue;
  border-radius: 10px 0 10px 10px;

  & > .msg {
    color: var(--font-dark-color);
    font-size: 14px;
  }
`;
