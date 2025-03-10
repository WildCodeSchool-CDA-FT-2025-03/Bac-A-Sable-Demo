import { useEffect, useState } from "react";
import { Repos } from "./types/repos.type";
import client from "./services/client";
import "./App.css";

function App() {
  const [data, setData] = useState<Repos[]>([]);

  useEffect(() => {
    client
      .get("/repos")
      .then((repos) => {
        setData(repos.data as Repos[]);
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
