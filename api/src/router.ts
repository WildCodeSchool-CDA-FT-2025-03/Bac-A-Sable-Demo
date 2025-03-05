import express from "express";

const router = express.Router();

// Route en API REST Verb HTTP + uri (/api/repos/12)
// GET, POST, PUT, PATCH DELETE
// http://localhost:3000/api/repos
router.get("/", (req, res) => {
  res.status(200).send("Tout est OK");
});

export default router;
