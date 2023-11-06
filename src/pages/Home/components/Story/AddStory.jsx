import React, { useState } from "react";
import { styled } from "styled-components";
import CloseIcon from "../../../../assets/icon/close.png";
import ImageButton from "./ImageButton";
import { COLOR, FONT_SIZE } from "../../../../utils";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../recoil/atom";
import Button from "../../../../components/Button";
import { changeImageToURL } from "../../../../utils/function";

export default function AddStory(props) {
  const { isAddStoryOpen, closeModal } = props;
  const user = useRecoilValue(userState);
  const [content, setContent] = useState({
    image: "",
    text: "",
    x: null,
    y: null,
    user: user.accountname,
    token: user.token,
    date: "",
  });
  const [backgroundImage, setBackgroundImage] = useState("");

  const onClickContentAreaHandler = (e) => {
    setContent({
      ...content,
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
  };

  const onImageUploadHandler = (value) => {
    setContent({ ...content, image: value });
  };

  const uploadStory = async () => {
    try {
      const imageFile = await changeImageToURL(content.image);
      await addDoc(collection(db, "story"), {
        ...content,
        date: new Date(),
        userImage: user.image,
        image: imageFile,
      });
      closeModal();
      setContent({
        image: "",
        text: "",
        x: null,
        y: null,
        user: user.accountname,
        token: user.token,
        date: "",
      });
      setBackgroundImage(null);
    } catch (err) {
      console.error(err);
    }
  };

  if (isAddStoryOpen) {
    return (
      <PageStyle>
        <ContentContainerStyle
          backgroundImage={backgroundImage}
          onClick={onClickContentAreaHandler}
        >
          <BtnContainerStyle>
            <CloseBtnStyle
              onClick={() => {
                closeModal();
                setContent({
                  image: "",
                  text: "",
                  x: null,
                  y: null,
                  user: user.accountname,
                  token: user.token,
                  date: "",
                });
                setBackgroundImage(null);
              }}
            >
              <CloseIconStyle src={CloseIcon} alt="닫기 아이콘" />
            </CloseBtnStyle>
            <Button buttonText="전송" size="s" onClickHandler={uploadStory} />
          </BtnContainerStyle>
        </ContentContainerStyle>
        <InputStyle
          left={content.x}
          top={content.y}
          onChange={(e) => {
            setContent({ ...content, text: e.target.value });
          }}
        />
        <ImageButton
          onChangeHandler={setBackgroundImage}
          onImageUploadHandler={onImageUploadHandler}
        />
      </PageStyle>
    );
  } else {
    return null;
  }
}

const PageStyle = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #ffffff;
  overflow: hidden;
`;

const BtnContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 12px;
`;

const CloseBtnStyle = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const CloseIconStyle = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;

const ContentContainerStyle = styled.section`
  background: ${(props) =>
    props.backgroundImage
      ? `url(${props.backgroundImage})`
      : `${COLOR.bgPrimaryColor}`};
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 50% 50%;
`;

const InputStyle = styled.input`
  width: 100%;
  opacity: ${(props) => props.left};
  font-size: ${FONT_SIZE.medium};
  position: absolute;
  left: ${(props) => `${props.left}px`};
  top: ${(props) => `${props.top}px`};
  border: none;
  font-family: "PyeongChang";
  background-color: transparent;
  &:focus {
    outline: none;
    background-color: transparent;
  }
`;
