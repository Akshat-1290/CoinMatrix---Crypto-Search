import bitcoinImg from "../assets/bitcoin-img.png";
import ethereumImg from "../assets/ethereum-img.png";

export const HeroText = () => {
  return (
    <>
      <div className="relative">
        <h1 className="text-center text-5xl sm:text-6xl md:text-7xl xl:text-[7rem] uppercase leading-tight">
          <span className="text-slate-100">Track And Trade</span>
          <br />
          <span className="bg-gradient-purple bg-clip-text text-transparent">
            Crypto Currencies
          </span>
        </h1>
        <img
          className="hidden lg:block absolute h-20 top-2 -left-20
            xl:-left-14 animate-bounce"
          src={bitcoinImg}
          alt="bitcoin-image"
        ></img>
        <img
          className="hidden lg:block absolute h-20 top-2 -right-20
            xl:-right-14 animate-bounce"
          src={ethereumImg}
          alt="ethereum-image"
        ></img>
      </div>
    </>
  );
};
