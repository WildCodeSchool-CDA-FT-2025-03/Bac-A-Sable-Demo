import useRepos from "../services/useRepos";
import RepoCard from "../components/RepoCard";

function Home() {
  const { data } = useRepos();
  return (
    <>
      <h1>Mon titre</h1>
      {data.map((repo, index) => (
        <RepoCard repo={repo} cls={index % 2 === 0 ? "red" : "blue"}>
          <span>Balise span children</span>
        </RepoCard>
      ))}
      ;
    </>
  );
}

export default Home;
