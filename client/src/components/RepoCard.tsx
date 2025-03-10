import { JSX } from "react";
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
      {children}
    </>
  );
}

export default RepoCard;
