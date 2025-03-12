import { useEffect } from "react";
import useLanguages from "../../services/useLanguages";

type SelectFormLanguagesProps = {
  value: string;
  handleNewRepo: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
function SelectFormLanguages({
  value,
  handleNewRepo,
}: SelectFormLanguagesProps) {
  const { languages, getAllLanguages } = useLanguages();

  useEffect(() => {
    getAllLanguages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <label htmlFor="">
      Choix du languages
      <select name="languages" value={value} onChange={handleNewRepo} required>
        {languages.map((lg) => (
          <option value={lg}>{lg}</option>
        ))}
      </select>
    </label>
  );
}

export default SelectFormLanguages;
