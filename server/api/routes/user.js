import express from "express";
import { UserModel } from "../models/user.js";

export const userRoutes = express.Router();

userRoutes.get("/", async (req, res) => {
  const users = await UserModel.find({});

  return res.status(200).send(users);
});

userRoutes.post("/", async (req, res) => {
  if (!req.body) {
    throw new BadRequestError("User fields are required");
  }
  const user = await UserModel.create(req.body);

  return res.status(200).send(user);
});

userRoutes.patch("/:id", async (req, res) => {
  if (!req.body) {
    throw new BadRequestError("User fields are required");
  }
  const user = await UserModel.findByIdAndUpdate(
    req.params.id,
    {
      ...req.body,
    },
    { new: true }
  );

  return res.status(200).send(user);
});
