import ChooseUs from "../components/ChooseUs";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import JoinUs from "../components/JoinUs";
import { Market } from "../components/Market";
import { Pagination } from "../components/Pagination";

export const Home = () => {
  return (
    <>
      <Hero />
      <Market />
      <Pagination />
      <ChooseUs />
      <JoinUs />
      <Footer />
    </>
  );
};
