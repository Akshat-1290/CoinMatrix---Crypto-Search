export const floatConverter = (num)=>{
    if (num.toString().includes(".")) {
      return num;
    } else {
      return num + ".00";
    }
  }

  export const formatPercentage = (num) => {
    let priceStr = num.toString();
    if (priceStr[0] === "-") {
      return (
        <span className={`text-xl text-red-600]`}>{num.toFixed(2)} %</span>
      );
    } else {
      return (
        <span className={`text-xl text-emerald-500`}>
          +{num.toFixed(2)} %
        </span>
      );
    }
  }