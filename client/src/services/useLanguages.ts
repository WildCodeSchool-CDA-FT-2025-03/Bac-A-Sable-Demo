import { useState } from "react";
import client from "./client";

const useLanguages = () => {
  const [languages, setLanguages] = useState<string[]>([]);

  const getAllLanguages = () => {
    client
      .get(`/languages`)
      .then((languages) => {
        setLanguages(languages.data as string[]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return { languages, getAllLanguages };
};

export default useLanguages;
