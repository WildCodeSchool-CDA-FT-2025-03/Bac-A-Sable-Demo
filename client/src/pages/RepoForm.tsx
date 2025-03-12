import { useState } from "react";
import type { Repos } from "../types/repos.type";

/**
 *
 * @returns
 * url
  isPrivate
  languages: [{
    size,
    node: {
      name
    }),
  }]
  name
  description
 */
const initialRepo = {
  url: "",
  isPrivate: false,
  languages: [
    {
      size: 0,
      node: {
        name: "",
      },
    },
  ],
  name: "",
  description: "",
};

function RepoForm() {
  const [newRepo, setNewRepo] = useState<Repos>(initialRepo);
  console.log(newRepo);

  const handleNewRepo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRepo(() => ({ ...newRepo, [e.target.name]: e.target.value }));
  };

  return (
    <form className="container">
      <h1 className="text-center">Ajout d'un repo</h1>
      <label>
        Nom du repo
        <input
          type="text"
          name="name"
          value={newRepo.name}
          onChange={handleNewRepo}
        />
      </label>
      <label>
        Description
        <input
          type="text"
          name="description"
          value={newRepo.description}
          onChange={handleNewRepo}
        />
      </label>
    </form>
  );
}

export default RepoForm;
