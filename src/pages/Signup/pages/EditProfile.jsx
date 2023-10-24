import styled from "styled-components";
import Button from "../../../components/Button";
import Input from "../../../components/Input/Input";
import Layout from "../../../components/Layout/Layout";
import EditProfileIcon from "../../../assets/basic-profile-img.png";
import { COLOR, FONT_SIZE } from "../../../utils";
import AddImgButton from "../components/AddImgButton";

export default function EditProfile() {
  return (
    <Layout>
      <EditProfilePage>
        <Title>프로필 설정</Title>
        <Text>나중에 언제든지 변경할 수 있습니다.</Text>
        <ProfileImg src={EditProfileIcon} />
        <AddImgButton />
        <Input
          type="text"
          labelText="사용자이름"
          placeholder="2-10자 이내여야 합니다."
          placeholderColor={COLOR.fontLightGrayColor}
          maxLength="10"
        />
        <Input
          type="text"
          labelText="계정 ID"
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          placeholderColor={COLOR.fontLightGrayColor}
        />
        <Input
          type="text"
          labelText="소개"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
          placeholderColor={COLOR.fontLightGrayColor}
        />
        <Button buttonText="감귤마켓 시작하기" disabled />
      </EditProfilePage>
    </Layout>
  );
}

const EditProfilePage = styled.div`
  margin: 10%;
  & > Button {
    font-size: ${FONT_SIZE.large};
    margin: 0 auto;
    margin-top: 30px;
  }
  position: relative;
`;

const Title = styled.div`
  font-size: 24px;
  color: #000000;
  text-align: center;
  margin-bottom: 12px;
`;

const ProfileImg = styled.img`
  position: relative;
  display: block;
  width: 110px;
  height: 110px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

const Text = styled.div`
  font-size: ${FONT_SIZE.large};
  color: ${COLOR.fontPrimaryColor};
  text-align: center;
  margin-bottom: 30px;
`;
