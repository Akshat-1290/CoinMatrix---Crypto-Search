import { useContext } from "react";
import { CoinsContext } from "../context/AppContext";

export const Pagination = () => {
  const {pagination ,  setPagination } = useContext(CoinsContext);
  const paginationButtons = [];

  const scrollMarketTop = () => {
    const marketElement = document.querySelector("#market");
    window.scrollTo({
      top: marketElement.offsetTop - 100,
      behavior: "smooth",
    });
  };

  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
        className={`cursor-pointer w-12 h-12 ${
          pagination === i
            ? "bg-gradient-purple text-slate-100"
            : "bg-slate-100 text-black"
        } rounded-full text-xl`}
        onClick={() => {
          setPagination(i);
          scrollMarketTop();
        }}
      >
        {i}
      </button>
    );
  }

  return (
    <>
      <div className="pagination-buttons flex gap-4 justify-center mt-10 font-space">
        {paginationButtons}
      </div>
    </>
  );
};
