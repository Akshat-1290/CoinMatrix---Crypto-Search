import bitcoinImg from "../assets/bitcoin-img.png";
import ethereumImg from "../assets/ethereum-img.png";
import PropTypes from "prop-types"

export const BigText = ({text1 , text2}) => {
  return (
    <>
        <div className="text-center text-[8vw] sm:text-6xl md:text-7xl xl:text-[7rem] uppercase leading-tight">
          <span className="text-slate-100">{text1}</span>
          <br />
          <span className="bg-gradient-purple bg-clip-text text-transparent">
           {text2}
          </span>
        </div>
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
    </>
  );
};

BigText.propTypes =  {
text1 : PropTypes.string.isRequired,
text2 : PropTypes.string.isRequired
}