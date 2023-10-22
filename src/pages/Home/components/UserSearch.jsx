import { styled } from "styled-components";
import ProfileImg from "../../../assets/profile-example.png";
import SearchContent from "./SearchContent";
import Layout from "../../../components/Layout/Layout";
import SearchHeader from "../../../components/Header/SearchHeader";
import LayoutContent from "../../../components/Layout/LayoutContent";
import NavBar from "../../../components/Footer/NavBar";

export default function UserSearch(props) {
  const testUser = {
    image: ProfileImg,
    userName: "애월읍 한라봉 최고 맛집",
    id: "@ hanlabong",
  };

  return (
    <Layout>
      <SearchHeader />
      <LayoutContent>
        <SearchStyle>
          <SearchContent user={testUser} />
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
