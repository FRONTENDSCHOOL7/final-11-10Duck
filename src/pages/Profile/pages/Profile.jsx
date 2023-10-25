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
import useCheckUser from '../hooks/useCheckUser';

export default function Profile() {
    const [urlParam, setUrlParam] = useState('');
    const [urlAccountName, setUrlAccountName] = useState('');

    const { accountName } = useParams();
    const user = useRecoilValue(userState);
    const { header } = useAPI();
    const { isMyProfile } = useCheckUser(accountName);

    const fetchProfileInfo = async () => {
        try {
            isMyProfile && setUrlAccountName(user.accountname);
            !isMyProfile && setUrlAccountName(urlParam);
            const res = await api.get(`/profile/${urlAccountName}`, { headers: header });
            console.log('🌟프로필 정보 불러오기 성공');
            console.log('********************');
            console.log(isMyProfile);
            console.log(user.accountname);
            console.log(res.data);
            console.log('********************');
        } catch (error) {
            console.error(error);
            console.log('🔥프로필 정보 불러오기 실패');
        }
    };

    useEffect(() => {
        setUrlParam(accountName);
        fetchProfileInfo();
    }, []);

    return (
        <Layout>
            <BasicHeader />
            <LayoutContent isWhite={false} paddingOff={true}>
                <p>accountName : {accountName}</p>
                <p>urlParam : {urlParam}</p>
                <p>isMyProfile : {isMyProfile.toString()}</p>
                {/* 프로필 정보 */}
                {/* <ProfileInfo whosProfile={whosProfile} userProfileInfo={userProfileInfo} /> */}
                {/* 판매 중인 상품 */}
                {/* <ProductScroller products={res.product} /> */}
                {/* 포스트한 게시물  */}
                {/* <PostList /> */}
            </LayoutContent>
            <NavBar />
        </Layout>
    );
}
