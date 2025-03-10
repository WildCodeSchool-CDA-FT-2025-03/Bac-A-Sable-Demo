import useRepos from "./services/useRepos";
import "./App.css";

function App() {
  const { data } = useRepos();

  return (
    <>
      <h1>Mon titre</h1>
      {data.length > 0 && <h2>{data[0].url}</h2>}
    </>
  );
}

export default App;
