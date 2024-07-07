import { HeroCoins } from "./HeroCoins";
import { BigText } from "./BigText";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [screenSize, setScreenSize] = useState("");
const detectScreenSize = () => {
      window.innerWidth >=640 ? setScreenSize("large") : setScreenSize("small")
}
  useEffect(() => {
detectScreenSize()
    window.addEventListener("resize" , detectScreenSize)
  }, []);
  return (
    <>
      <section id="hero" className="bg-gradient-home pt-40">
        <div className="hero-container font-space font-bold text-white flex flex-col gap-6 items-center px-4">
          <h1 className="relative">
            <BigText text1="Track And Trade" text2="Cryptocurrencies" />
          </h1>
          {screenSize === "small" ? (
            <button
              onClick={() => window.scrollTo({ top: 300, behavior: "smooth" })}
              className="scroll-to-market bg-gradient-purple w-2/3 h-14 rounded-full text-xl flex justify-center items-center gap-3"
            >
              See Prices <i className="fa-solid fa-angle-down"></i>
            </button>
          ) : (
            <HeroCoins />
          )}
        </div>
      </section>
    </>
  );
};
