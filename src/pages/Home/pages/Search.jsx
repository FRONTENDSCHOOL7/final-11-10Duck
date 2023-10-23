import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import SearchHeader from "../../../components/Header/SearchHeader";
import NavBar from "../../../components/Footer/NavBar";

export default function Search() {
  return (
    <Layout>
      <SearchHeader />
      <LayoutContent></LayoutContent>
      <NavBar />
    </Layout>
  );
}
