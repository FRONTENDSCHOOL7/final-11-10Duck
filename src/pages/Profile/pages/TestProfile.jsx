import React from 'react';
import React, { useEffect, useState } from 'react';
import Layout from '../../../components/Layout/Layout';
import BasicHeader from '../../../components/Header/BasicHeader';
import LayoutContent from '../../../components/Layout/LayoutContent';
import NavBar from '../../../components/Footer/NavBar';
import ProfileInfo from '../components/ProfileInfo';
import PostList from '../components/PostList';
import ProductScroller from '../../../components/Product/ProductScroller';
import { res } from '../../../constants/product';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../recoil/atom';
import { useParams } from 'react-router-dom';
import useAPI from '../../../hooks/useAPI';
import { api } from '../../../api/baseURL';

export default function TestProfile() {
    const [whosProfile, setWhosProfile] = useState('');
    const [followingList, setFollowingList] = useState([]);
    const [followerList, setFollowerList] = useState([]);
    const [userProfileInfo, setUserProfileInfo] = useState({});
    const [loginUser, setLoginUser] = useState(user);
    const [urlParams, setUrlParams] = useState({});

    const checkIsMyProfile = () => {
        console.log('urlParams :', urlParams);
        if (!urlParams.accountName) setWhosProfile('myProfile');
        else if (urlParams.accountName === user.accountname) setWhosProfile('myProfile');
        //else setWhosProfile('notMine');
    };
    const checkIsFollowing = () => {
        if (whosProfile === 'myProfile') {
            return;
        } else {
            userProfileInfo.isfollow && setWhosProfile('isFollow');
            !userProfileInfo.isfollow && setWhosProfile('notFollow');
        }
        console.log('checkIsFollowing :: ', whosProfile);
    };
    const fetchUserProfileInfo = async () => {
        try {
            console.log('🌟whosProfile ::', whosProfile);
            console.log('🌟loginUser ::', loginUser);
            await api
                .get(`/profile/${!whosProfile ? user.accountname : whosProfile !== 'myProfile' ? urlParams.accountName : user.accountname}`, {
                    headers: header,
                })
                .then((res) => {
                    setUserProfileInfo(res.data.profile);
                    setFollowerList(userProfileInfo.follower);
                    setFollowingList(userProfileInfo.following);
                    console.log('🌟userProfileInfo ::', userProfileInfo);
                })
                .then(() => {
                    if (whosProfile === 'myProfile') {
                        return;
                    } else {
                        userProfileInfo.isfollow && setWhosProfile('isFollow');
                        !userProfileInfo.isfollow && setWhosProfile('notFollow');
                    }
                    console.log('checkIsFollowing :: ', whosProfile);
                });

            console.log('🌟개인 프로필 정보 불러오기 성공');
        } catch (err) {
            console.error(err);
            console.log('🔥개인 프로필 정보 불러오기 실패');
        }
        console.log('~~~~~~~~~~~~~~~');
    };
    return <div></div>;
}
