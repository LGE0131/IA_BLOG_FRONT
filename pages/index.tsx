import type { NextPage } from "next";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import NewMenu from "../components/NewMenu";
import RecomendedMenu from "../components/RecomendedMenu";
import SetMenu from "../components/SetMenu";
import Category from "../components/Category";

const Home: NextPage = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <NewMenu />
      <RecomendedMenu />
      <SetMenu />
      <Category />
    </div>
  );
};

export default Home;
