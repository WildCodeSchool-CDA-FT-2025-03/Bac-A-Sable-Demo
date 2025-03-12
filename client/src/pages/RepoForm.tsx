import { useState } from "react";
import type { Repos } from "../types/repos.type";
import InputForm from "../components/forms/InputForm";

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
      <InputForm
        handleNewRepo={handleNewRepo}
        value={newRepo.name}
        title="Titre du repo"
        name="name"
      />
      <InputForm
        handleNewRepo={handleNewRepo}
        value={newRepo.description}
        title="Description du repo"
        name="description"
      />
      <InputForm
        handleNewRepo={handleNewRepo}
        value={newRepo.url}
        title="Url du repo"
        name="url"
      />
    </form>
  );
}

export default RepoForm;
