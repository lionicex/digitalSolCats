import Header from "../components/Header";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import { RouteComponentProps } from "@reach/router";

const Home = (_: RouteComponentProps) => {

  return (
    <>
      <Header />
      <Roadmap />
      <Team />
      <FAQ />
      <Footer />
    </>
  );
};
export default Home;
