import express, { Response } from "express";
import data from "../../data.json";

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
repos.get("/:reposid", (req, res) => {
  const repo = data.find((rep) => rep.id === req.params.reposid);
  res.status(200).json(repo);
});
export default repos;
