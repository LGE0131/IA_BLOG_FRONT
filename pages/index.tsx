import type { NextPage } from "next";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import NewMenu from "../components/NewMenu";

const Home: NextPage = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <NewMenu />
    </div>
  );
};

export default Home;
