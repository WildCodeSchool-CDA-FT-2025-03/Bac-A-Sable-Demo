import { useEffect, useRef } from "react";
import InputForm from "../components/forms/InputForm";
import SelectFormLanguages from "../components/forms/SelectFormLanguages";
import useRepos from "../services/useRepos";
import { Repos } from "../types/repos.type";

function RepoForm() {
  const inputName = useRef<HTMLInputElement>(null);
  const inputDescription = useRef<HTMLInputElement>(null);
  const inputUrl = useRef<HTMLInputElement>(null);
  const selectLanguages = useRef<HTMLSelectElement>(null);
  const inputIsPrivate = useRef<HTMLInputElement>(null);
  const { addNewRepo } = useRepos();

  useEffect(() => {
    if (inputUrl.current) {
      inputUrl.current.focus();
    }
  }, []);

  const handleSubmitRepo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (
        inputDescription.current &&
        inputIsPrivate.current &&
        inputName.current &&
        inputUrl.current &&
        selectLanguages.current
      ) {
        const newRepo: Repos = {
          name: inputName.current?.value,
          url: inputUrl.current?.value,
          description: inputDescription.current?.value,
          languages: [
            {
              size: 0,
              node: { name: selectLanguages.current?.value },
            },
          ],
          isPrivate: inputIsPrivate.current?.value === "on" ? true : false,
        };
        console.log(newRepo);
        await addNewRepo(newRepo);
      } else {
        throw new Error("Invalid formulaire");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="container" onSubmit={handleSubmitRepo}>
      <h1 className="text-center">Ajout d'un repo</h1>
      <InputForm title="Titre du repo" name="name" ref={inputName} />
      <InputForm
        title="Description du repo"
        name="description"
        ref={inputDescription}
      />
      <InputForm title="Url du repo" name="url" ref={inputUrl} />
      <SelectFormLanguages ref={selectLanguages} />
      <label htmlFor="">
        Is Private ?
        <input type="checkbox" name="isPrivate" required ref={inputIsPrivate} />
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default RepoForm;
