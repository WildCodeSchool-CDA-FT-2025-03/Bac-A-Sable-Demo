import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  console.log("First Console Log");

  useEffect(() => {
    console.log("Console frome UseEffect");
    fetch("http://localhost:3000/api/repos")
      .then((res) => res.json())
      .then((repos) => {
        debugger;
        setData(repos);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log("Just before return");
  return (
    <>
      {console.log("In the return", data)}
      <h1>Mon titre</h1>
      {data.length > 0 && <h2>{data[0].url}</h2>}
    </>
  );
}

export default App;
