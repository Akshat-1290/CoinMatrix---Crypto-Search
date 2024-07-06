import { Link } from "react-router-dom";

export const Market = () => {
  return (
    <>
      <section
        id="market"
        className="text-slate-100 font-space mt-16 px-6 lg:flex lg:justify-center"
      >
        <section id="market-table" className="overflow-x-auto mt-7 ">
        <h2 className="font-bold text-4xl mb-6">Market Update</h2>
          <div className="table-head bg-gradient-purple flex items-center gap-5 h-14 w-fit xl:w-[78rem] text-2xl font-semibold px-7 rounded-tl-lg rounded-tr-lg">
            <p className="w-64 xl:w-80">Coin</p>
            <p className="w-44 xl:w-60">Price</p>
            <p className="w-64 xl:w-[22rem]">24th Change </p>
            <p className="w-36">Market Cap</p>
          </div>
          <div className="table-data w-fit xl:w-[78rem]">
            <Link
              to={""}
              className="flex items-center py-5 px-4 text-2xl font-semibold border-b hover:bg-[#200840]"
            >
              <span className="w-64 xl:w-80 flex items-center gap-2">
                <img
                  src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
                  alt=""
                  className="h-12"
                />
                <p>Bitcoin</p>
              </span>
              <p className="w-64 xl:w-80 text-start">$ 56474.00</p>
              <p className="w-36 xl:w-72 ">4.08 %</p>
              <p className="w-64  text-end"> $ 1,112,454,945,189</p>
            </Link>
            <p className="h-[3rem] bg-red-500"></p>
          </div>
        </section>
      </section>
    </>
  );
};
