import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRepos from "../services/useRepos";

export default function RepoPage() {
  const { id } = useParams();
  const { oneRepos, getOneRepos } = useRepos();

  useEffect(() => {
    getOneRepos(id as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <h1>Voici la page avec le repo {id}</h1>
      {oneRepos && oneRepos.languages.map((lg) => <h4>{lg.node.name}</h4>)}
    </div>
  );
}
