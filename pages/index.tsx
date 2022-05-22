import type { NextPage } from "next";
import Nav from "../components/Nav";
import Banner from "../components/Banner";

const Home: NextPage = () => {
  return (
    <div>
      <Nav />
      <Banner />
    </div>
  );
};

export default Home;
