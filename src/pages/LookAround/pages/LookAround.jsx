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

export default function LookAround() {
    const { header } = useAPI();

    const [userList, setUserList] = useState([]);
    const [galleyList, setGalleryList] = useState([]);

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
            <BasicHeader mode={'post'} />
            <LayoutContent>
                <GalleryStyle>
                    {galleyList.map((post) => {
                        return <Gallery key={post.id} post={post} />;
                    })}
                </GalleryStyle>
            </LayoutContent>
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
