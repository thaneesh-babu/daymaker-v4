import express from "express";
import { UserModel } from "../models/user.js";

export const userRoutes = express.Router();

userRoutes.get("/", async (req, res) => {
  const users = await UserModel.find({});

  res.status(200).send(users);
});
