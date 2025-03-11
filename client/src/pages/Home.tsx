import useRepos from "../services/useRepos";
import RepoCard from "../components/RepoCard";

function Home() {
  const { data } = useRepos();

  return (
    <>
      <h1>Mon titre</h1>
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
