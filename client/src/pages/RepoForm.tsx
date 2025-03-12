import { useEffect, useState } from "react";
import type { Repos } from "../types/repos.type";
import InputForm from "../components/forms/InputForm";
import useLanguages from "../services/useLanguages";

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
  const { languages, getAllLanguages } = useLanguages();
  console.log(newRepo);

  const handleNewRepo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRepo(() => ({ ...newRepo, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    getAllLanguages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(languages);
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
      <label htmlFor="">
        Choix du languages
        <select name="" id="">
          {languages.map((lg) => (
            <option value={lg}>{lg}</option>
          ))}
        </select>
      </label>
    </form>
  );
}

export default RepoForm;
