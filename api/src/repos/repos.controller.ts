import express, { Response, Request } from "express";
import data from "../../data.json";
import { Repos } from "./repos.type";

const repos = express.Router();

/**
 * Route GET pour récupérer tous mes repos
 *  /api/repos
 */
repos.get("/", (_, res: Response) => {
  res.status(200).json(data);
});

/**
 * Route Get pour récupérer un repos via son id
 * /api/repos/dujen_deodei
 */
repos.get("/:reposid", (req: Request, res: Response) => {
  const repo = data.find((rep) => rep.id === req.params.reposid) as Repos;

  if (repo) {
    res.status(200).json(repo);
  } else {
    res.sendStatus(404);
  }
});

repos.post("/", (req, res) => {
  const newId = Math.ceil(Math.random() * 100000).toString();
  data.push({ ...req.body, id: newId });
  res.status(201).json({ id: newId });
});

export default repos;
