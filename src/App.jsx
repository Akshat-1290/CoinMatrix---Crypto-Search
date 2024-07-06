import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";
import { fetchCoinsData } from "./functions/getData";
import { CoinsContext } from "./context/AppContext";
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(1);
  const Location = useLocation()
  useEffect(() => {
    if (Location.pathname === "/") {
      fetchCoinsData(10, pagination).then((value) => {
        if (value) {
          setData(value);
          setLoading(false);
        }
      });
    }
  }, [pagination , Location]);

  return (
    <>
      <Navbar />
      <main>
        <CoinsContext.Provider value={{ data, setPagination, loading }}>
          <Outlet />
        </CoinsContext.Provider>
      </main>
    </>
  );
}

export default App;
