import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";
import { fetchCoinsData } from "./functions/getData";

function App() {
  const [data, setData] = useState(null);
  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    fetchCoinsData(10, pagination).then((value) => {
      setData(value);
    });
  }, [pagination]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
