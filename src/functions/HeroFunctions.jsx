export const floatConverter = (num)=>{
    if (num.toString().includes(".")) {
      return num;
    } else {
      return num + ".00";
    }
  }

  export const formatPercentage = (num , size = "xl") => {
    let priceStr = num.toString();
    if (priceStr[0] === "-") {
      return (
        <span className={`text-${size} text-red-600`}>{num.toFixed(2)} %</span>
      );
    } else {
      return (
        <span className={`text-${size} text-emerald-500`}>
          +{num.toFixed(2)} %
        </span>
      );
    }
  }

  export function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
