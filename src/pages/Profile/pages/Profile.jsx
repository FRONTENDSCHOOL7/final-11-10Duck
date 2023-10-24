import React, { useEffect, useState } from 'react';
import Layout from '../../../components/Layout/Layout';
import BasicHeader from '../../../components/Header/BasicHeader';
import LayoutContent from '../../../components/Layout/LayoutContent';
import NavBar from '../../../components/Footer/NavBar';
import ProfileInfo from '../components/ProfileInfo';
import PostList from '../components/PostList';
import ProductScroller from '../../../components/Product/ProductScroller';
import { res } from '../../../constants/product';
import { useParams } from 'react-router-dom';
import useAPI from '../../../hooks/useAPI';
import { api } from '../../../api/baseURL';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../recoil/atom';

export default function Profile() {
    const [whosProfile, setWhosProfile] = useState('');
    const [myFollowingList, setMyFollowingList] = useState([]);
    const [myFollowerList, setMyFollowerList] = useState([]);
    const [userProfileInfo, setUserProfileInfo] = useState({});

    const { header } = useAPI();
    const user = useRecoilValue(userState);
    const params = useParams();

    const fetchMyFollowingList = async () => {
        try {
            const res = await api.get(`/profile/${user.accountname}/following`, {
                headers: header,
            });
            console.log('🌟내 팔로잉 리스트 불러오기 성공');
            setMyFollowingList(res.data);
        } catch (err) {
            console.error(err);
            console.log('🔥내 팔로잉 리스트 불러오기 실패');
        }
    };
    const fetchMyFollowerList = async () => {
        try {
            const res = await api.get(`/profile/${user.accountname}/follower`, {
                headers: header,
            });
            console.log('🌟내 팔로워 리스트 불러오기 성공');
            setMyFollowerList(res.data);
        } catch (err) {
            console.error(err);
            console.log('🔥내 팔로워 리스트 불러오기 실패');
        }
    };
    const fetchUserProfileInfo = async (whosProfile) => {
        try {
            console.log(whosProfile);
            console.log(user.accountname);
            const res = await api.get(`/profile/${whosProfile === 'myProfile' ? user.accountname : params.accountName}`, {
                headers: header,
            });
            console.log('🌟개인 프로필 정보 불러오기 성공');
            console.log('🌟개인 프로필 정보 불러오기 :', res);
            setUserProfileInfo(res.data.profile);
        } catch (err) {
            console.error(err);
            console.log('🔥개인 프로필 정보 불러오기 실패');
        }
    };
    const checkWhosProfile = () => {
        const followedUser = myFollowingList.filter((user) => user.accountname === params.accountName);

        // 본인 프로필인지 아니면 타인의 프로필인지 팔로우 여부 파악해서
        // setWhosProfile( myProfile || isFollow || notFollow )
        if (!params.accountName) setWhosProfile('myProfile');
        else if (params.accountName === user.accountname) setWhosProfile('myProfile');
        else if (params.accountName && followedUser._id) setWhosProfile('isFollow');
        else setWhosProfile('notFollow');
    };

    useEffect(() => {
        fetchMyFollowingList();
        fetchMyFollowerList();
        checkWhosProfile();
    }, []);
    useEffect(() => {
        fetchUserProfileInfo(whosProfile);
    }, [whosProfile]);
    return (
        <Layout>
            <BasicHeader />
            <LayoutContent isWhite={false} paddingOff={true}>
                {/* 프로필 정보 */}
                <ProfileInfo whosProfile={whosProfile} userProfileInfo={userProfileInfo} myFollowingList={myFollowingList} myFollowerList={myFollowerList} />
                {/* 판매 중인 상품 */}
                <ProductScroller products={res.product} />
                {/* 포스트한 게시물  */}
                <PostList />
            </LayoutContent>
            <NavBar />
        </Layout>
    );
}
