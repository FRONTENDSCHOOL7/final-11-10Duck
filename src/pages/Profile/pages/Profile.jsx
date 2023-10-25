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

export default function Profile() {
    const { header } = useAPI();
    const { accountName } = useParams();
    const user = useRecoilValue(userState);

    const [urlAccountName, setUrlAccountName] = useState(accountName ? accountName : user.accountname);
    const [isMyProfile, setIsMyProfile] = useState(null);
    const [profileInfo, serProfileInfo] = useState({});
    const [productList, setProductInfo] = useState({});

    const fetchProfileInfo = async () => {
        try {
            const res = await api.get(`/profile/${urlAccountName}`, { headers: header });
            console.log('🌟프로필 정보 불러오기 성공');
            console.log('********************');
            console.log('isMyProfile :', isMyProfile);
            console.log('urlAccountName :', urlAccountName);
            console.log('res.data.profile :', res.data.profile);
            console.log('********************');
            serProfileInfo(res.data.profile);
        } catch (error) {
            console.error(error);
            console.log('🔥프로필 정보 불러오기 실패');
        }
        console.log('profileInfo ==> ', profileInfo);
    };
    const fetchProductList = async () => {
        try {
            const res = await api.get(`/product/${urlAccountName}`, { headers: header });
            console.log('🌟상품 리스트 불러오기 성공');
            setProductInfo(res.data.product);
        } catch (error) {
            console.error(error);
            console.log('🔥상품 리스트 불러오기 실패');
        }
    };

    useEffect(() => {
        urlAccountName === user.accountname ? setIsMyProfile(true) : setIsMyProfile(false);
    }, []);
    useEffect(() => {
        fetchProfileInfo();
        // fetchProductList();
    }, [urlAccountName]);
    return (
        <Layout>
            <BasicHeader />
            <LayoutContent isWhite={false} paddingOff={true}>
                <p>urlParam : {accountName}</p>
                <p>loginUser : {user.accountname}</p>
                <p>isMyProfile : {isMyProfile !== null && isMyProfile.toString()}</p>

                {/* 프로필 정보 */}
                <ProfileInfo isMyProfile={isMyProfile} profileInfo={profileInfo} />
                {/* 판매 중인 상품 */}
                {/* <ProductScroller products={productList} /> */}
                {/* 포스트한 게시물  */}
                <PostList urlAccountName={urlAccountName} />
            </LayoutContent>
            <NavBar />
        </Layout>
    );
}
