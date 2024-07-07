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
      fetchCoinsData(10, pagination).then((value) => {
        if (value) {
          setData(value);
          setLoading(false);
        }
        else{
          alert("Error Fetching Data")
        }
      }).catch((error) => {
        console.log(error);
      });

  }, [pagination]);

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
