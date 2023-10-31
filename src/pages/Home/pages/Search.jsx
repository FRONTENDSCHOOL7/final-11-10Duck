import { styled } from 'styled-components';
import Layout from '../../../components/Layout/Layout';
import LayoutContent from '../../../components/Layout/LayoutContent';
import SearchHeader from '../../../components/Header/SearchHeader';
import NavBar from '../../../components/Footer/NavBar';
import SearchContent from '../components/SearchContent';
import ProfileImg from '../../../assets/profile-example.png';
import { useEffect, useState } from 'react';
import useAPI from '../../../hooks/useAPI';
import { api } from '../../../api/baseURL';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../recoil/atom';

export default function Search() {
    const { header } = useAPI();
    //const user = useRecoilValue(userState);

    const [searchInput, setSearchInput] = useState('');
    const [searchList, setSearchList] = useState([]);

    const fetchSearchUser = async () => {
        try {
            const res = await api.get(`/user/searchuser/?keyword=${searchInput}`, {
                headers: header,
            });
            const resList = res.data.filter((data) => data.username.includes(searchInput) || data.accountname.includes(searchInput));

            // const res = await api.get(`/user/searchuser/?keyword=${'ssduck'}`, {
            //     headers: header,
            // });
            // const resList = res.data.filter((data) => data.username.includes('ssduck') || data.accountname.includes('ssduck'));

            setSearchList([...resList]);

            console.log('🌟유저 검색 성공');
        } catch (err) {
            console.error(err);
            console.log('🔥유저 검색 실패');
        }
    };

    useEffect(() => {
        fetchSearchUser();
    }, [searchInput]);
    return (
        <Layout>
            <SearchHeader setSearchInput={setSearchInput} />
            <LayoutContent>
                <SearchStyle>
                    {searchList.map((user) => {
                        return <SearchContent user={user} />;
                    })}
                </SearchStyle>
            </LayoutContent>
            <NavBar />
        </Layout>
    );
}

const SearchStyle = styled.div`
    margin-top: 20px;
    display: block;
`;
