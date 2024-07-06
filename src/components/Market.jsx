import { useContext } from "react";
import { Link } from "react-router-dom";
import { CoinsContext } from "../context/AppContext";
import {
  formatPercentage,
  floatConverter,
  numberWithCommas,
} from "../functions/HeroFunctions";
import { Loader } from "./Loader";
import { Pagination } from "./Pagination";

export const Market = () => {
  const { data, loading } = useContext(CoinsContext);
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
            {loading && <Loader/>}
            {!loading &&
              data.map((item) => {
                return (
                  <Link
                    to={`/coin/${item.name}`}
                    key={item.id}
                    className="flex items-center py-5 px-4 text-2xl font-semibold border-b hover:bg-[#200840]"
                  >
                    <span className="w-64 xl:w-[21rem] flex items-center gap-2">
                      <img src={item.image} alt={item.id} className="h-12" />
                      <p>{item.name}</p>
                    </span>
                    <p className="w-64 xl:w-72 text-start">
                      {formatPercentage(
                        item.price_change_percentage_24h,
                        "2xl"
                      )}
                    </p>
                    <p className="w-36 xl:w-80 ">
                      {" "}
                      ${floatConverter(item.current_price)}
                    </p>
                    <p className="w-64  text-end">
                      {" "}
                      $ {numberWithCommas(item.market_cap)}
                    </p>
                  </Link>
                );
              })}
              <Pagination/>
              {/* {!loading && <Pagination/>} */}
          </div>
        </section>
      </section>
    </>
  );
};
