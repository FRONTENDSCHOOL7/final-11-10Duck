import styled from 'styled-components';
import Input from '../../../components/Input/Input';
import Layout from '../../../components/Layout/Layout';
import { COLOR } from '../../../utils';
import { useNavigate } from 'react-router-dom';
import UploadHeader from '../../../components/Header/UploadHeader';
import LayoutContent from '../../../components/Layout/LayoutContent';
import { useRecoilState } from 'recoil';
import { userState } from '../../../recoil/atom';
import { useEffect, useState } from 'react';
import ImageButton from '../components/ImageButton';
import useAPI from '../../../hooks/useAPI';
import { api } from '../../../api/baseURL';
import { AddAPIURLImage, changeImageToURL } from '../../../utils/function';

export default function EditProfileInfo() {
    const { header } = useAPI();
    const navigate = useNavigate();

    const [user, setUser] = useRecoilState(userState);
    const [userData, setUserData] = useState(user);
    const [newImage, setNewImage] = useState('');
    const [isButtonActive, setIsButtonActive] = useState(false);

    const handleUsername = (e) => {
        setUserData({ ...userData, username: e.target.value });
    };
    const handleAccountname = (e) => {
        setUserData({ ...userData, accountname: e.target.value });
    };
    const handleIntro = (e) => {
        setUserData({ ...userData, intro: e.target.value });
    };
    const onImageUploadHandler = (value) => {
        setUserData({ ...userData, image: value });
    };
    const checkIsButtonActive = () => {
        !userData.username || !userData.accountname ? setIsButtonActive(true) : setIsButtonActive(false);
    };

    const updateProfileInfo = async () => {
        try {
            const imageFileName = await changeImageToURL(userData.image);
            const imageUrl = await AddAPIURLImage(imageFileName);
            const res = await api.put(
                '/user',
                {
                    user: {
                        username: userData.username,
                        accountname: userData.accountname,
                        intro: userData.intro,
                        image: newImage ? imageUrl : userData.image,
                    },
                },
                {
                    headers: header,
                }
            );
            console.log('🌟프로필 수정 성공');
            const resUserData = res.data.user;
            setUser({ ...user, username: resUserData.username, accountname: resUserData.accountname, intro: resUserData.intro, image: resUserData.image });
            navigate(`/profile`);
        } catch (err) {
            console.error(err);
            console.log('🔥프로필 수정 실패');
        }
    };

    useEffect(() => {
        checkIsButtonActive();
    }, [userData]);
    return (
        <Layout>
            <UploadHeader buttonText={'저장'} disabled={isButtonActive} size={'MS'} onClickHandler={updateProfileInfo} />
            <LayoutContent>
                <EditProfileStyle>
                    <ProfileImageStyle>
                        <ProfileImg src={newImage ? newImage : userData.image} />

                        <ImageButton onChangeHandler={setNewImage} onImageUploadHandler={onImageUploadHandler} />
                    </ProfileImageStyle>

                    <Input type="text" value={userData.username} labelText="사용자이름" placeholder="2-10자 이내여야 합니다." placeholderColor={COLOR.bgBorderColor} onChangeHandler={handleUsername} />
                    <Input
                        type="text"
                        labelText="계정 ID"
                        value={userData.accountname}
                        placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
                        placeholderColor={COLOR.bgBorderColor}
                        onChangeHandler={handleAccountname}
                    />
                    <Input
                        type="text"
                        labelText="소개"
                        value={userData.intro}
                        placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
                        placeholderColor={COLOR.bgBorderColor}
                        onChangeHandler={handleIntro}
                    />
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
    border-radius: 50%;
`;

const ProfileImageStyle = styled.div`
    position: relative;
`;
