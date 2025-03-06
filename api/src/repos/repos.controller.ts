import express, { Response, Request } from "express";
import { validateRepo } from "./repos.validation";
import data from "../../data.json"; // const data = []
import { Repos } from "./repos.type";

const repos = express.Router();
let reposState = data;

type Fields = "id" | "url" | "languages" | "isPrivate";

/**
 * Route GET pour récupérer tous mes repos
 *  /api/repos
 */
repos.get("/", (req: Request, res: Response) => {
  console.log("Hit all repo controller");
  console.log(req.query);

  // Select * from repos where isPrivate = ?, [req.query.isPrivate]
  let result = req.query.isPrivate
    ? reposState.filter(
        (rep) => rep.isPrivate.toString() === req.query.isPrivate
      )
    : reposState;

  if (req.query.limit && result.length > +req.query.limit) {
    result = result.slice(0, +req.query.limit);
  }

  if (req.query.fields) {
    const fields =
      typeof req.query.fields === "string" ? req.query.fields.split(",") : [];

    // Retourner un tableau
    // Pour chaque élément, ne garder que les clés voulues
    result = result.map((el: Repos) => {
      // map retourne un tableau [res, res, res, res]
      const res = fields.reduce(
        (acc, field) => ({ ...acc, [field]: el[field] }), // { ...acc }
        {}
      ); // Methode de tableau qui retourne accumulateur (string, number, object, array)
      return res; // { fields[0]: ..., fields[1]: ...]}
    }) as Repos[];
  }
  res.status(200).json(result);
});

/**
Tour 1
acc = {}, field = "id" => { "id": "dejenzencor" }

Tour 2
acc = { "id": "dejenzencor" }, field = "url" => { "id": "dejenzencor", "url": "http://..."}
*/

/**
 * Route Get pour récupérer un repos via son id
 * /api/repos/dujen_deodei
 */
repos.get("/:reposid", (req: Request, res: Response) => {
  const repo = reposState.find((rep) => rep.id === req.params.reposid) as Repos;

  if (repo) {
    res.status(200).json(repo);
  } else {
    res.sendStatus(404);
  }
});

repos.post("/", validateRepo, (req: Request, res: Response) => {
  const newId = Math.ceil(Math.random() * 100000).toString();
  reposState.push({ ...req.body, id: newId });
  res.status(201).json({ id: newId });
});

repos.delete("/:reposId", (req: Request, res: Response) => {
  reposState = reposState.filter((repo) => repo.id !== req.params.reposId);
  res.sendStatus(204);
});

/*** Sécurité métiers */
export default repos;
