import { styled } from "styled-components";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import SearchHeader from "../../../components/Header/SearchHeader";
import NavBar from "../../../components/Footer/NavBar";
import SearchContent from "../components/SearchContent";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { ssduckUserListState } from "../../../recoil/atom";

export default function Search() {
  const ssduckUserList = useRecoilValue(ssduckUserListState);

  const [searchInput, setSearchInput] = useState("");
  const [searchList, setSearchList] = useState([]);

  const searchUsers = () => {
    const res = ssduckUserList.filter((user) => {
      return (
        user.username.includes(searchInput) ||
        user.accountname.includes(searchInput)
      );
    });
    setSearchList(res);
  };

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
              return (
                <SearchContent
                  user={user}
                  searchInput={searchInput}
                  key={user._id}
                />
              );
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
