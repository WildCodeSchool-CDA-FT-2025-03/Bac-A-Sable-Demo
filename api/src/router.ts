import express, { Response } from "express";
import repos from "./repos/repos.controller";
import languages from "./languages/languages.controller";

const router = express.Router();

// Route en API REST Verb HTTP + uri (/api/repos/12)
// GET, POST, PUT, PATCH DELETE
// http://localhost:3000/api/repos
router.get("/", (_, res: Response) => {
  res.status(200).send("Tout est OK");
});

router.use("/repos", repos);
router.use("/languages", languages);

export default router;
