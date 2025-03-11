import express, { Request, Response } from "express";
import data from "../../data.json";
const languages = express.Router();

languages.get("/", (req: Request, res: Response) => {
  const languages = data.reduce((acc, repo) => {
    repo.languages.forEach((lg) => {
      if (!acc.includes(lg.node.name)) {
        acc.push(lg.node.name);
      }
      return acc;
    });
    return acc;
  }, [] as string[]);

  res.status(200).json(languages);
});

export default languages;
