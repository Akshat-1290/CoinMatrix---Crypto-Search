import { HeroCoins } from "./HeroCoins";
import { HeroText } from "./HeroText";

export const Hero = () => {
  return (
    <>
      <section id="hero" className="bg-gradient-home pt-40">
        <div className="hero-container font-space font-bold text-white flex flex-col gap-6 items-center px-4">
          <HeroText />
          <button className="scroll-to-market bg-gradient-purple w-2/3 h-14 rounded-full text-xl flex justify-center items-center gap-3 sm:hidden">
            See Prices <i className="fa-solid fa-angle-down"></i>
          </button>
          <HeroCoins />
        </div>
      </section>
    </>
  );
};
