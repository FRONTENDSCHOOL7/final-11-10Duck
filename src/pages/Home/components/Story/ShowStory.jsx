import React from "react";
import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { userState } from "../../../../recoil/atom";
import { COLOR, FONT_SIZE } from "../../../../utils";

export default function ShowStory(props) {
  const { isShowStoryOpen, story } = props;
  const user = useRecoilValue(userState);

  const elapsedTime = (date) => {
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

  if (isShowStoryOpen) {
    return (
      <PageStyle>
        <ContentStyle>
          <HeaderStyle>
            <HeaderImageStyle src={user.image} />
            <HeaderUserStyle>{`@${story.user}`}</HeaderUserStyle>
            <HeaderTimeStyle>{elapsedTime(story.time)}</HeaderTimeStyle>
          </HeaderStyle>
          <TextStyle left={story.x} top={story.y}>
            {story.text}
          </TextStyle>
        </ContentStyle>
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
`;

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
`;
const HeaderImageStyle = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 100%;
  border: 2px solid ${COLOR.borderOrangeColor};
`;
const HeaderUserStyle = styled.div``;
const HeaderTimeStyle = styled.div`
  color: ${COLOR.fontLightGrayColor};
  padding-top: 4px;
  font-size: ${FONT_SIZE.medium};
`;

const ContentStyle = styled.div`
  height: 100%;
  width: 100%;
`;

const TextStyle = styled.div`
  position: absolute;
  left: ${(props) => `${props.left}px`};
  top: ${(props) => `${props.top}px`};
`;
