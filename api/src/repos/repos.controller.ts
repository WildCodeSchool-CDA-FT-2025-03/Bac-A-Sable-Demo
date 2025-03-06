import express, { Response, Request } from "express";
import { validateRepo } from "./repos.validation";
import data from "../../data.json";
import { Repos } from "./repos.type";

const repos = express.Router();

/**
 * Route GET pour récupérer tous mes repos
 *  /api/repos
 */
repos.get("/", (req: Request, res: Response) => {
  console.log("Hit all repo controller");
  console.log(req.query);

  const result = req.query.isPrivate
    ? data.filter((rep) => rep.isPrivate.toString() === req.query.isPrivate)
    : data;
  res.status(200).json(result);
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

repos.post("/", validateRepo, (req: Request, res: Response) => {
  const newId = Math.ceil(Math.random() * 100000).toString();
  data.push({ ...req.body, id: newId });
  res.status(201).json({ id: newId });
});

export default repos;
