import { useState } from "react";
import type { Repos } from "../types/repos.type";
import InputForm from "../components/forms/InputForm";
import SelectFormLanguages from "../components/forms/SelectFormLanguages";
import useRepos from "../services/useRepos";

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
  const { addNewRepo } = useRepos();

  const handleNewRepo = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (e.target.name === "languages") {
      setNewRepo((prev) => ({
        ...prev,
        languages: [{ size: 0, node: { name: e.target.value } }],
      }));
    } else if (e.target.name === "isPrivate") {
      setNewRepo(() => ({ ...newRepo, [e.target.name]: !newRepo.isPrivate }));
    } else {
      setNewRepo(() => ({ ...newRepo, [e.target.name]: e.target.value }));
    }
    console.log("new Repos", newRepo);
    console.log(e.target.name, e.target.value);
  };

  const handleSubmitRepo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log(newRepo);
      await addNewRepo(newRepo);
      setNewRepo(initialRepo);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="container" onSubmit={handleSubmitRepo}>
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
      <SelectFormLanguages
        handleNewRepo={handleNewRepo}
        value={newRepo.languages[0].node.name}
      />
      <label htmlFor="">
        Is Private ?
        <input
          type="checkbox"
          name="isPrivate"
          className={newRepo.isPrivate ? "red" : "blue"}
          checked={newRepo.isPrivate}
          onChange={handleNewRepo}
          required
        />
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default RepoForm;
