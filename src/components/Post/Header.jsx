import React, { useEffect } from "react";
import { styled } from "styled-components";
import Button from "../Button";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atom";
import { COLOR } from "../../utils";
import { changeProfileImage } from "../../utils/function";

export default function Header(props) {
  const { hasButton } = props;

  const [user, setUser] = useRecoilState(userState);

  // useEffect 부분은 테스트용으로 넣어둔 것이라 지우고 진행하셔도됩니다. 모르겠다싶으면 주예한테 질문해주세요!
  useEffect(() => {
    setUser({
      ...user,
      username: "애월읍 위니브 감귤 농장",
      accountname: "weniv_Mandarin",
    });
  }, []);

  return (
    <HeaderStyle>
      <ProfileContainerStyle>
        <ProfileImageStyle
          src={changeProfileImage(user.image)}
          alt="프로필 이미지"
        />
        <UserInfoContainerStyle>
          <UserNameStyle>{user.username}</UserNameStyle>
          <UserIdStyle>{`@ ${user.accountname}`}</UserIdStyle>
        </UserInfoContainerStyle>
      </ProfileContainerStyle>
      {hasButton && <Button buttonText="팔로우" size="s" />}
    </HeaderStyle>
  );
}

const HeaderStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;

const ProfileContainerStyle = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImageStyle = styled.img`
  width: 42px;
  height: 42px;
  object-fit: cover;
`;

const UserInfoContainerStyle = styled.div`
  margin-left: 12px;
`;

const UserNameStyle = styled.div`
  font-size: 14px;
  color: ${COLOR.fontDarkColor};
  margin-bottom: 6px;
`;

const UserIdStyle = styled.div`
  font-size: 12px;
  color: ${COLOR.fontPrimaryColor};
`;
