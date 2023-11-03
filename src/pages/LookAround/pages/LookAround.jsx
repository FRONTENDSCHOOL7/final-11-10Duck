import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { COLOR } from '../../../utils';
import Layout from '../../../components/Layout/Layout';
import BasicHeader from '../../../components/Header/BasicHeader';
import LayoutContent from '../../../components/Layout/LayoutContent';
import NavBar from '../../../components/Footer/NavBar';
import Gallery from '../components/Gallery';
import { api } from '../../../api/baseURL';
import useAPI from '../../../hooks/useAPI';
import useModal from '../../../hooks/useModal';
import BottomModal from '../../../components/Modal/BottomModal';
import AlertModal from '../../../components/Modal/AlertModal';
import useAlertModal from '../../../hooks/useAlertModal';
import { useRecoilState } from 'recoil';
import { userState } from '../../../recoil/atom';
import { useNavigate } from 'react-router-dom';

export default function LookAround() {
    const { header } = useAPI();
    const [user, setUser] = useRecoilState(userState);
    const navigate = useNavigate();

    const { isModalOpen, isUserAlertModalOpen, userAlertModal, userModalMenuList, onModalHandler, userAlertModalHandler } = useModal();
    const { isAlertModalOpen, alertModalHandler } = useAlertModal();

    const [userList, setUserList] = useState([]);
    const [galleyList, setGalleryList] = useState([]);
    const [alertModal, setAlertModal] = useState({
        alertTitle: '',
        leftBtnText: '취소',
        rightBtnText: '',
    });

    const fetch10DuckUsers = async () => {
        try {
            const res = await api.get(`user/searchuser/?keyword=ssduck`, {
                headers: header,
            });

            res.data.forEach((user) => {
                user.accountname.includes('ssduck') && setUserList((prev) => [...prev, user]);
            });

            console.log('🌟씁덕학개론 유저 목록 불러오기 성공');
        } catch (err) {
            console.error(err);
            console.log('🔥씁덕학개론 유저 목록 불러오기 실패');
        }
    };
    const fetchUserPost = async (userAccountname) => {
        try {
            const res = await api.get(`/post/${userAccountname}/userpost`, {
                headers: header,
            });

            res.data.post.forEach((post) => {
                post.image && setGalleryList((prev) => [...prev, post]);
            });

            console.log(`🌟${userAccountname} 게시글 불러오기 성공`);
        } catch (err) {
            console.error(err);
            console.log(`🔥${userAccountname} 게시글 불러오기 실패`);
        }
    };

    const sortShuffle = (arr) => {
        return arr.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        userList.length === 0 && fetch10DuckUsers();
    }, []);

    useEffect(() => {
        sortShuffle(userList).forEach((user) => {
            fetchUserPost(user.accountname);
        });
    }, [userList]);

    return (
        <Layout>
            <BasicHeader mode={'post'} onClickMoreBtnHandler={onModalHandler} />
            <LayoutContent>
                <GalleryStyle>
                    {galleyList.map((post) => {
                        return <Gallery key={post.id} post={post} />;
                    })}
                </GalleryStyle>
            </LayoutContent>
            <BottomModal isModalOpen={isModalOpen} menu={userModalMenuList} onModalHandler={onModalHandler} />
            <AlertModal
                isModalOpen={isAlertModalOpen}
                alertTitle={alertModal.alertTitle}
                leftBtnText={alertModal.leftBtnText}
                rightBtnText={alertModal.rightBtnText}
                onModalHandler={alertModalHandler}
            />
            <AlertModal
                isModalOpen={isUserAlertModalOpen}
                alertTitle={userAlertModal.alertTitle}
                leftBtnText={userAlertModal.leftBtnText}
                rightBtnText={userAlertModal.rightBtnText}
                onModalHandler={userAlertModalHandler}
                onClickRightBtnHandler={() => {
                    setUser({
                        _id: '',
                        username: '',
                        email: '',
                        accountname: '',
                        intro: '',
                        image: '',
                        token: '',
                        refreshToken: '',
                    });
                    localStorage.removeItem('token');
                    navigate('/');
                }}
            />
            <NavBar />
        </Layout>
    );
}

const GalleryStyle = styled.section`
    display: grid;
    place-content: center;
    grid-template-columns: repeat(3, minmax(auto, 114px));
    gap: 5px;
    padding: 16px 0 30px;
    background-color: ${COLOR.bgPrimaryColor};
`;
