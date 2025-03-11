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
    <>
      <h2 className={cls}>{repo.url}</h2>
      <Link to={`/repos/${repo.id}`}>{repo.id}</Link>
      {children}
    </>
  );
}

export default RepoCard;
