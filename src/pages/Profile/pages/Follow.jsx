import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../../components/Layout/Layout';
import BasicHeader from '../../../components/Header/BasicHeader';
import LayoutContent from '../../../components/Layout/LayoutContent';
import NavBar from '../../../components/Footer/NavBar';
import FollowUser from '../components/FollowUser';
import useAPI from '../../../hooks/useAPI';
import { api } from '../../../api/baseURL';

export default function Follow() {
    const { header } = useAPI();
    const { accountName, followMode } = useParams();

    const [followingList, setFollowingList] = useState([]);
    const [followerList, setFollowerList] = useState([]);
    const [isFollowingList, setIsFollowingList] = useState(false);

    const fetchFollowingList = async () => {
        try {
            const res = await api.get(`/profile/${accountName}/following`, {
                headers: header,
            });
            console.log('🌟 팔로잉 리스트 불러오기 성공');
            setFollowingList(res.data);
        } catch (err) {
            console.error(err);
            console.log('🔥 팔로잉 리스트 불러오기 실패');
        }
    };
    const fetchFollowerList = async () => {
        try {
            const res = await api.get(`/profile/${accountName}/follower`, {
                headers: header,
            });
            console.log('🌟 팔로워 리스트 불러오기 성공');
            setFollowerList(res.data);
        } catch (err) {
            console.error(err);
            console.log('🔥 팔로워 리스트 불러오기 실패');
        }
    };

    useEffect(() => {
        fetchFollowingList();
        fetchFollowerList();
        followMode === 'followings' ? setIsFollowingList(true) : setIsFollowingList(false);
    }, []);

    return (
        <Layout>
            <BasicHeader isFollowersPage={true} followMode={followMode} />
            <LayoutContent>
                {isFollowingList ? followingList.map((user) => <FollowUser key={user._id} user={user} />) : followerList.map((user) => <FollowUser key={user._id} user={user} />)}
            </LayoutContent>
            <NavBar />
        </Layout>
    );
}
