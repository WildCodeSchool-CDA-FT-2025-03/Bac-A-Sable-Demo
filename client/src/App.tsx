import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const user = "admin";
  if (user === "admin") {
    return (
      <>
        <header>BANDEAU DE NAVIGATION</header>
        <Outlet />
        <footer>BANDEAU DE PIED DE PAGE</footer>
      </>
    );
  }
  return <p>Not allowed</p>;
}

export default App;
