import express, { Response, Request, NextFunction } from "express";
import Joi from "joi";
import data from "../../data.json";
import { Repos } from "./repos.type";

const repos = express.Router();

const schema = Joi.object({
  url: Joi.string().required(),
  isPrivate: Joi.boolean().required(),
  languages: Joi.array().items(
    Joi.object({
      size: Joi.number().required(),
      node: Joi.object({
        name: Joi.string(),
      }),
    })
  ),
});

const validateRepo = (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(422).json(error);
  } else {
    next();
  }
};

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

repos.post("/", validateRepo, (req: Request, res: Response) => {
  const newId = Math.ceil(Math.random() * 100000).toString();
  data.push({ ...req.body, id: newId });
  res.status(201).json({ id: newId });
});

export default repos;
