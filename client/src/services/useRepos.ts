import { useCallback, useState } from "react";
import client from "./client";
import type { Repos } from "../types/repos.type";

const useRepos = () => {
  const [data, setData] = useState<Repos[]>([]);
  const [oneRepos, setOneRepos] = useState<Repos>();
  const [error, setError] = useState(false);

  const getAllRepos = useCallback((limit: string) => {
    client
      .get(`/repos?limit=${limit}`)
      .then((repos) => {
        setData(repos.data as Repos[]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const getOneRepos = (id: string) => {
    client
      .get(`/repos/${id}`)
      .then((repos) => {
        setOneRepos(repos.data as Repos);
      })
      .catch((error) => {
        setError(true);
        console.error(error);
      });
  };

  const addNewRepo = async (repo: Repos) => {
    try {
      await client.post("/repos", repo);
    } catch (error) {
      console.error(error);
    }
  };

  return { data, oneRepos, getOneRepos, getAllRepos, error, addNewRepo };
};

export default useRepos;
