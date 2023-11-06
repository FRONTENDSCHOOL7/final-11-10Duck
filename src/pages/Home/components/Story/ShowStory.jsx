import React from "react";
import { styled } from "styled-components";
import { COLOR, FONT_SIZE } from "../../../../utils";
import { AddAPIURLImage, elapsedTime } from "../../../../utils/function";

export default function ShowStory(props) {
  const { isShowStoryOpen, story } = props;

  if (isShowStoryOpen) {
    return (
      <PageStyle>
        <ContentStyle backgroundImage={AddAPIURLImage(story.image)}>
          <HeaderStyle>
            <HeaderImageStyle src={story.userImage} />
            <HeaderUserStyle>{`@${story.user}`}</HeaderUserStyle>
            <HeaderTimeStyle>
              {elapsedTime(story.date.toDate())}
            </HeaderTimeStyle>
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
  background: ${(props) =>
    props.backgroundImage
      ? `url(${props.backgroundImage})`
      : `${COLOR.bgPrimaryColor}`};
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 50% 50%;
`;

const TextStyle = styled.div`
  position: absolute;
  left: ${(props) => `${props.left}px`};
  top: ${(props) => `${props.top}px`};
  font-size: ${FONT_SIZE.medium};
`;
