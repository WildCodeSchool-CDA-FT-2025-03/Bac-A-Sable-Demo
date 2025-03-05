import express from "express";
import "dotenv/config";

const app = express();

const port = process.env.EXPRESS_SERVER_PORT || 3000;
app.listen(port, () => {
  console.info(`You server is running on http://localhost:${port}`);
});
