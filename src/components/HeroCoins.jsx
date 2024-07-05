import { Link } from "react-router-dom";

export const HeroCoins = () => {
  return (
    <>
     <div className="hero-coins hidden w-full sm:grid grid-cols-2 md:grid-cols-4 justify-items-center gap-10 mt-4 xl:flex xl:justify-center xl:gap-28">
            <Link
              to={""}
              className="flex flex-col justify-center items-center gap-2"
            >
              <img
                className="h-24"
                src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
                alt=""
              />
              <div className="text-xl">
                <span>Bitcoin</span>{" "}
                <span className="text-red-600">-5.58%</span>
              </div>
              <span className="text-2xl tracking-wider">$5448.00</span>
            </Link>
            <Link
              to={""}
              className="flex flex-col justify-center items-center gap-2"
            >
              <img
                className="h-24"
                src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
                alt=""
              />
              <div className="text-xl">
                <span>Bitcoin</span> <span>-5.58%</span>
              </div>
              <span className="text-2xl tracking-wider">$5448.00</span>
            </Link>
            <Link
              to={""}
              className="flex flex-col justify-center items-center gap-2"
            >
              <img
                className="h-24"
                src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
                alt=""
              />
              <div className="text-xl">
                <span>Bitcoin</span> <span>-5.58%</span>
              </div>
              <span className="text-2xl tracking-wider">$5448.00</span>
            </Link>
            <Link
              to={""}
              className="flex flex-col justify-center items-center gap-2"
            >
              <img
                className="h-24"
                src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
                alt=""
              />
              <div className="text-xl">
                <span>Bitcoin</span> <span>-5.58%</span>
              </div>
              <span className="text-2xl tracking-wider">$5448.00</span>
            </Link>
          </div>
    </>
  )
}
