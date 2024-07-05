import { useContext } from "react";
import { Link } from "react-router-dom";
import { CoinsContext } from "../context/AppContext";
import { floatConverter, formatPercentage } from "../functions/HeroFunctions";
export const HeroCoins = () => {
  const { data, loading } = useContext(CoinsContext);
  const limitedCoins = data ? data.slice(0, 4) : null;
  return (
    <>
      {!loading && (
        <div className="hero-coins hidden w-full sm:grid grid-cols-2 md:grid-cols-4 justify-items-center gap-10 mt-4 xl:flex xl:justify-center xl:gap-28">
          {limitedCoins.map((item) => {
            return (
              <Link
                key={item.id}
                to={`/coin/${item.name.toLowerCase()}`}
                className="flex flex-col justify-center items-center gap-2"
              >
                <img className="h-24" src={item.image} alt={item.id} />
                <div className="text-xl">
                  <span>{item.name}</span>{" "}
                  <span className="text-red-600">
                    {formatPercentage(item.price_change_percentage_24h)}
                  </span>
                </div>
                <span className="text-2xl tracking-wider">
                  ${floatConverter(item.current_price)}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};
