import styled from 'styled-components';
import Button from '../../../components/Button';
import Input from '../../../components/Input/Input';
import Layout from '../../../components/Layout/Layout';
import { COLOR, FONT_SIZE } from '../../../utils';
import EditProfileIcon from '../../../assets/basic-profile-img.png';
import { useLocation } from 'react-router-dom';
import AddImgIcon from '../../../assets/upload-file.png';
import UploadHeader from '../../../components/Header/UploadHeader';
import LayoutContent from '../../../components/Layout/LayoutContent';

export default function EditProfile() {
    const location = useLocation();

    return (
        <Layout>
            <UploadHeader buttonText={'저장'} disabled size={'MS'} onClickHandler={() => {}} />
            <LayoutContent>
                <EditProfileStyle>
                    <ProfileImageStyle>
                        <ProfileImg src={EditProfileIcon} />
                        <AddImg src={AddImgIcon} />
                    </ProfileImageStyle>

                    <Input type="text" labelText="사용자이름" placeholder="2-10자 이내여야 합니다." placeholderColor={COLOR.bgBorderColor} onChangeHandler={() => {}} />
                    <Input type="text" labelText="계정 ID" placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다." placeholderColor={COLOR.bgBorderColor} onChangeHandler={() => {}} />
                    <Input type="text" labelText="소개" placeholder="자신과 판매할 상품에 대해 소개해 주세요!" placeholderColor={COLOR.bgBorderColor} onChangeHandler={() => {}} />
                </EditProfileStyle>
            </LayoutContent>
        </Layout>
    );
}

const EditProfileStyle = styled.div`
    margin: 30px 18px 0;
`;

const ProfileImg = styled.img`
    display: block;
    width: 110px;
    height: 110px;
    margin: 0 auto;
    margin-bottom: 30px;
`;

const ProfileImageStyle = styled.div`
    position: relative;
`;

const AddImg = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    position: absolute;
    bottom: 0;
    left: 55%;
    cursor: pointer;
`;
