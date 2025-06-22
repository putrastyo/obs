import express from "express";
import dotenv from "dotenv";
import logger from "./logger/logger.js";
import userRouter from "./routers/router.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
