import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";
import { fetchCoinsData } from "./functions/getData";
import { CoinsContext } from "./context/AppContext";
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    console.log("fething");
    setLoading(true);
    fetchCoinsData(10, pagination).then((value) => {
      setData(value);
      setLoading(false);
    });
  }, [pagination]);

  const updatePagination = () => {
    setPagination(pagination + 1);
  };

  return (
    <>
      <Navbar />
      <main>
        <CoinsContext.Provider value={{ data, updatePagination, loading }}>
          <Outlet />
        </CoinsContext.Provider>
      </main>
    </>
  );
}

export default App;
