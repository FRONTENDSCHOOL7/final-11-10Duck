import React, { useEffect, useState } from 'react';
import Layout from '../../../components/Layout/Layout';
import BasicHeader from '../../../components/Header/BasicHeader';
import LayoutContent from '../../../components/Layout/LayoutContent';
import NavBar from '../../../components/Footer/NavBar';
import ProfileInfo from '../components/ProfileInfo';
import PostList from '../components/PostList';
import ProductScroller from '../../../components/Product/ProductScroller';
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
    const [isFollow, setIsFollow] = useState(null);
    const [profileInfo, serProfileInfo] = useState({});
    //const [productList, setProductInfo] = useState({});

    const changeProfileInfo = (info) => {
        serProfileInfo(info);
    };
    const changeIsFollow = (param) => {
        setIsFollow(param);
    };

    const fetchProfileInfo = async () => {
        try {
            const res = await api.get(`/profile/${urlAccountName}`, { headers: header });
            console.log('🌟 프로필 정보 불러오기 성공');
            serProfileInfo(res.data.profile);
            setIsFollow(res.data.profile.isfollow);
        } catch (error) {
            console.error(error);
            console.log('🔥 프로필 정보 불러오기 실패');
        }
    };

    useEffect(() => {
        urlAccountName === user.accountname ? setIsMyProfile(true) : setIsMyProfile(false);
    }, []);
    useEffect(() => {
        fetchProfileInfo();
    }, [urlAccountName]);
    return (
        <Layout>
            <BasicHeader mode={'post'} />
            <LayoutContent isWhite={false} paddingOff={true}>
                {/* 프로필 정보 */}
                <ProfileInfo isMyProfile={isMyProfile} profileInfo={profileInfo} isFollow={isFollow} changeProfileInfo={changeProfileInfo} changeIsFollow={changeIsFollow} />
                {/* 판매 중인 상품 */}
                {/* <ProductScroller products={productList} /> */}
                {/* 포스트한 게시물  */}
                <PostList urlAccountName={urlAccountName} />
            </LayoutContent>
            <NavBar />
        </Layout>
    );
}
