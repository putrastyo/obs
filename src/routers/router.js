import express from "express";
import logger from "../logger/logger.js";
import { getUsers, createUser, getUser } from "../handlers/user-handler.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/", createUser);
userRouter.get("/:id", getUser);

export default userRouter;
