import styled from 'styled-components';
import Button from '../../../components/Button';
import Input from '../../../components/Input/Input';
import Layout from '../../../components/Layout/Layout';
import EditProfileIcon from '../../../assets/basic-profile-img.png';
import DefaultProfileIcon from '../../../assets/logo/WhiteDuck.png';
import { COLOR, FONT_SIZE, FILE } from '../../../utils';
import AddImgButton from '../components/AddImgButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../../api/baseURL';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../../recoil/atom';
import { AddAPIURLImage, changeImageToURL } from '../../../utils/function';

export default function EditProfile() {
    const location = useLocation();
    const { user } = location.state;
    const setUser = useSetRecoilState(userState);

    const [newImage, setNewImage] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [userData, setUserData] = useState({
        username: '',
        email: user.email,
        password: user.password,
        accountname: '',
        intro: '',
        image: '',
    });

    const navigate = useNavigate();

    const isButtonActive = [userData.username.length >= 2 && userData.username.length <= 10, userData.email, userData.password, userData.accountname].every((item) => !!item && errorMsg === '');

    const signUp = async () => {
        try {
            let profileImage = '';
            if (!userData.image) {
                profileImage = FILE.defaultProfileImageUrl;
            } else {
                console.log('===> newImage O');
                const imageFileName = await changeImageToURL(userData.image);
                const imageUrl = await AddAPIURLImage(imageFileName);
                profileImage = `${imageUrl}`;
            }

            const res = await api.post(
                '/user',
                {
                    user: { ...userData, image: profileImage },
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            console.log('🌟회원가입 성공');

            await signIn().then(() => {
                navigate('/');
            });
        } catch (err) {
            console.error(err);
            console.log('🔥회원가입 실패');
        }
    };

    const signIn = async () => {
        try {
            const res = await api.post(
                '/user/login',
                {
                    user: {
                        email: userData.email,
                        password: userData.password,
                    },
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            setUser(res.data.user);
            localStorage.setItem('token', res.data.user.token);
            console.log('🌟회원가입 후 로그인 성공');
        } catch (err) {
            console.error(err);
            console.log('🔥회원가입 후 로그인 실패');
        }
    };

    const checkAccountname = async (accountname) => {
        try {
            const res = await api.post(
                '/user/accountnamevalid',
                {
                    user: {
                        accountname,
                    },
                },
                {
                    headers: {
                        'Content-type': 'application/json',
                    },
                }
            );
            if (res.data.message === '이미 가입된 계정ID 입니다.') {
                setErrorMsg('*이미 사용 중인 ID입니다.');
            } else {
                setErrorMsg('');
            }
        } catch (error) {}
    };

    const handleAccountname = (event) => {
        const accountname = event.target.value;
        const AccountnameValid = /^[a-zA-Z0-9_.]*$/.test(accountname);
        if (!AccountnameValid) {
            setErrorMsg('*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.');
        } else {
            setErrorMsg('');
            checkAccountname(accountname);
        }

        setUserData({ ...userData, accountname });
    };

    const onImageUploadHandler = (value) => {
        setUserData({ ...userData, image: value });
    };

    return (
        <Layout>
            <EditProfilePage>
                <Title>프로필 설정</Title>
                <Text>나중에 언제든지 변경할 수 있습니다.</Text>
                <ProfileImg src={newImage ? newImage : DefaultProfileIcon} />
                <AddImgButton onChangeHandler={setNewImage} onImageUploadHandler={onImageUploadHandler} />
                <Input
                    type="text"
                    labelText="사용자이름"
                    placeholder="2-10자 이내여야 합니다."
                    placeholderColor={COLOR.fontLightGrayColor}
                    maxLength="10"
                    onChangeHandler={(event) => {
                        setUserData({ ...userData, username: event.target.value });
                    }}
                />
                <Input
                    type="text"
                    labelText="계정 ID"
                    placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
                    placeholderColor={COLOR.fontLightGrayColor}
                    onBlurHandler={handleAccountname}
                    alert={errorMsg}
                />
                <Input
                    type="text"
                    labelText="소개"
                    placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
                    placeholderColor={COLOR.fontLightGrayColor}
                    onChangeHandler={(event) => {
                        setUserData({ ...userData, intro: event.target.value });
                    }}
                />
                <Button buttonText="감귤마켓 시작하기" disabled={!isButtonActive} onClickHandler={signUp} />
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
    border-radius: 50%;
`;

const Text = styled.div`
    font-size: ${FONT_SIZE.large};
    color: ${COLOR.fontPrimaryColor};
    text-align: center;
    margin-bottom: 30px;
`;
