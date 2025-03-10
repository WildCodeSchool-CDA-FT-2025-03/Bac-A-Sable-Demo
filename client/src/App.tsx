import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/repos")
      .then((res) => res.json())
      .then((repos) => {
        setData(repos);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>Mon titre</h1>
      {data.length > 0 && <h2>{data[0].url}</h2>}
    </>
  );
}

export default App;
