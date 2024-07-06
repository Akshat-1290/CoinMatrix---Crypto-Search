import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCoin } from "../functions/getData";
import { Loader } from "../components/Loader";
import { floatConverter, formatPercentage } from "../functions/HeroFunctions";
import DOMPurify from "dompurify";

export const Coins = () => {
  const [loading, setLoading] = useState(true);
  const [coinData, setCoinData] = useState([]);
  const { coinid } = useParams();

  useEffect(() => {
    fetchCoin(coinid).then((value) => {
      if (value) {
        setCoinData(value);
        setLoading(false);
      }
    });
  }, [coinid]);
  return (
    <>
      <section
        id="coins"
        className="pt-40 flex flex-col justify-center items-center text-slate-100 font-space"
      >
        {loading && <Loader />}

        {!loading && (
          <>
            <div className="flex flex-col items-center gap-5 border-b w-4/5 pb-5">
              <img
                src={coinData.image.large}
                className="h-40"
                alt={coinData.id}
              />
              <p className="text-3xl font-semibold uppercase tracking-wider">
                {coinData.name}
              </p>
              <p className="text-2xl font-semibold uppercase tracking-wider">
                Rank: #{coinData.market_cap_rank}
              </p>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <span className="text-xl">
                24th Change :{" "}
                {formatPercentage(
                  coinData.market_data.price_change_percentage_24h
                )}
              </span>
              <span className="text-xl">
                Price : $
                {floatConverter(coinData.market_data.current_price.usd)}
              </span>
              <span className="text-xl">Symbol : {coinData.symbol}</span>
            </div>
            <div className="mt-5 text-center">
              <p
                className="px-7 overflow-y-auto h-[30rem] text-xl lg:h-[21.5rem]"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    coinData.description.en.length > 10
                      ? coinData.description.en
                      : "Description Not Available"
                  ),
                }}
              ></p>
            </div>
          </>
        )}
      </section>
    </>
  );
};
