const fetchData = async (api) => {
  try {
    console.log("Fetching Data...");
    const response = await fetch(api);
    if (!response.ok) {
      console.log(response);
      throw new Error("Error getting response.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    alert("Error Occured");
    console.log(error);
  }
};

export const fetchCoinsData = async (perpage, page) => {
  const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perpage}&page=${page}&sparkline=false`;
  return fetchData(api);
};
export const fetchCoin = async (coinId) => {
  const api = `https://api.coingecko.com/api/v3/coins/${coinId.toLowerCase()}`;

 return fetchData(api);
};
