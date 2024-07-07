import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";
import { fetchCoinsData } from "./functions/getData";
import { CoinsContext } from "./context/AppContext";
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(1);
  const navigate = useNavigate()
  useEffect(() => {
      fetchCoinsData(10, pagination).then((value) => {
        if (value) {
          setData(value);
          setLoading(false);
        }
        else{
          navigate("/notfound")
        }
      }).catch((error) => {
        console.log(error);
      });

  }, [pagination , navigate]);

  return (
    <>
      <Navbar />
      <main>
        <CoinsContext.Provider value={{ data,  pagination, setPagination, loading }}>
          <Outlet />
        </CoinsContext.Provider>
      </main>
    </>
  );
}

export default App;
