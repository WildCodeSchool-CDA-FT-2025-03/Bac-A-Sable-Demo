import { JSX } from "react";
import { Link } from "react-router-dom";
import { Repos } from "../types/repos.type";

type Props = {
  repo: Repos;
  cls: string;
  children: JSX.Element;
};
function RepoCard({ repo, children, cls }: Props) {
  return (
    <article>
      <Link to={`/repos/${repo.id}`}>
        {children}
        <h2 className={cls}>{repo.name}</h2>
      </Link>
    </article>
  );
}

export default RepoCard;
