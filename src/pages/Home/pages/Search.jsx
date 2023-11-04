import { styled } from 'styled-components';
import Layout from '../../../components/Layout/Layout';
import LayoutContent from '../../../components/Layout/LayoutContent';
import SearchHeader from '../../../components/Header/SearchHeader';
import NavBar from '../../../components/Footer/NavBar';
import SearchContent from '../components/SearchContent';
import { useEffect, useState } from 'react';
import useAPI from '../../../hooks/useAPI';
import { api } from '../../../api/baseURL';

export default function Search() {
    const { header } = useAPI();

    const [searchInput, setSearchInput] = useState('');
    const [searchList, setSearchList] = useState([]);
    const [allUserList, setAllUserList] = useState([]);

    const fetch10DuckUsers = async () => {
        try {
            const res = await api.get(`user/searchuser/?keyword=ssduck`, {
                headers: header,
            });

            res.data && res.data.forEach((user) => {
                user.accountname.includes('ssduck') && setAllUserList((prev) => [...prev, user]);
            });

            console.log('🌟씁덕학개론 유저 목록 불러오기 성공');
        } catch (err) {
            console.error(err);
            console.log('🔥씁덕학개론 유저 목록 불러오기 실패');
        }
    };

    const searchUsers = () => {
        const res = allUserList.filter((user)=>{
            return user.username.includes(searchInput) || user.accountname.includes(searchInput);
        })
        setSearchList(res)
    }

    useEffect(()=>{
        fetch10DuckUsers();
    },[])

    useEffect(() => {
        searchUsers();
    }, [searchInput]);
    
    return (
        <Layout>
            <SearchHeader setSearchInput={setSearchInput} />
            <LayoutContent>
                <SearchStyle>
                    {searchInput.length > 0 &&
                        searchList.map((user) => {
                            return <SearchContent user={user} searchInput={searchInput} key={user._id}/>;
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