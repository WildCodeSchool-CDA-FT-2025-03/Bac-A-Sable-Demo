import { useEffect } from "react";
import useLanguages from "../../services/useLanguages";

type SelectFormLanguagesProps = {
  ref: React.RefObject<HTMLSelectElement>;
};
function SelectFormLanguages({ ref }: SelectFormLanguagesProps) {
  const { languages, getAllLanguages } = useLanguages();

  useEffect(() => {
    getAllLanguages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <label htmlFor="">
      Choix du languages
      <select name="languages" ref={ref} required>
        {languages.map((lg) => (
          <option value={lg}>{lg}</option>
        ))}
      </select>
    </label>
  );
}

export default SelectFormLanguages;
