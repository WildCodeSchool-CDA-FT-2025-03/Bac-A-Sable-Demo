import express, { Request, Response } from "express";
import data from "../../data.json";
const languages = express.Router();

type Cache = {
  languages?: string[];
};

const cache: Cache = {};

languages.get("/", (req: Request, res: Response) => {
  if (!cache.languages) {
    const languages = data.reduce((acc, repo) => {
      repo.languages.forEach((lg) => {
        if (!acc.includes(lg.node.name)) {
          acc.push(lg.node.name);
        }
        return acc;
      });
      return acc;
    }, [] as string[]);

    cache.languages = languages;
  }
  res.status(200).json(cache.languages);
});

export default languages;
