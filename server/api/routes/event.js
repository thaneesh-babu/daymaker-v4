import express from "express";
import { EventModel } from "../models/event.js";

export const eventRoutes = express.Router();

eventRoutes.get("/", async (req, res) => {
  const eventss = await EventModel.find({});

  res.status(200).send(events);
});
