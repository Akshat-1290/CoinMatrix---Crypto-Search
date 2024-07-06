import ChooseUs from "../components/ChooseUs";
import { Hero } from "../components/Hero";
import { Market } from "../components/Market";
import { Pagination } from "../components/Pagination";

export const Home = () => {
  return (
    <>
      <Hero />
      <Market/>
      <Pagination/>
      <ChooseUs/>
    </>
  );
};
