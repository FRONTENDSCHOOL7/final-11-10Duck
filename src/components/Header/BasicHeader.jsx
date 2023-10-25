import React from "react";
import { styled } from "styled-components";
import ArrowIcon from "../../assets/icon/icon-arrow-left.png";
import moreIcon from "../../assets/icon/icon-more-vertical.png";
import { COLOR, FONT_SIZE } from "../../utils";
import useBackPage from "../../hooks/useBackPage";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/atom";

export default function BasicHeader({
  mode,
  isFollowersPage,
  followMode,
  onClickBackBtnHandler,
}) {
  const user = useRecoilValue(userState);

  const { backPage } = useBackPage();

  const moreIconHandle = () => {
    // 더보기 모달 오픈
  };

  return (
    <HeaderContainer>
      <ArrowStyle>
        <IconImg
          src={ArrowIcon}
          alt="뒤로가기 아이콘"
          onClick={onClickBackBtnHandler ? onClickBackBtnHandler : backPage}
        />
        {/* props.mode === 'chat'일때 유저명 표시 */}
        {!isFollowersPage ? (
          <UserName>{mode === "post" ? "" : user.username}</UserName>
        ) : (
          <UserName>{followMode}</UserName>
        )}
      </ArrowStyle>
      {!isFollowersPage && (
        <IconImg src={moreIcon} alt="더보기 아이콘" onClick={moreIconHandle} />
      )}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${COLOR.bgBorderColor};
  background-color: ${COLOR.bgPrimaryColor};
  padding: 13px 16px;
  box-sizing: border-box;
`;
const ArrowStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const IconImg = styled.img`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;
const UserName = styled.p`
  font-size: ${FONT_SIZE.large};
  font-weight: 500;
`;
