import { useEffect } from "react";
import useRepos from "../services/useRepos";
import RepoCard from "../components/RepoCard";
import { useSearchParams } from "react-router-dom";

function Home() {
  const { data, getAllRepos } = useRepos();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getAllRepos(searchParams.get("limit") || "10");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <>
      <h1>Mon titre</h1>
      <label>
        Nombre de repos affichés
        <select
          name="limit"
          value={searchParams.get("limit") || "10"}
          onChange={(e) => setSearchParams({ limit: e.target.value })}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </label>
      <main>
        {data.map((repo, index) => (
          <RepoCard repo={repo} cls={index % 2 === 0 ? "red" : "blue"}>
            <span>N° : {index}</span>
          </RepoCard>
        ))}
        ;
      </main>
    </>
  );
}

export default Home;
