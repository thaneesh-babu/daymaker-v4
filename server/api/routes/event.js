import express from "express";
import { EventModel } from "../models/event.js";

export const eventRoutes = express.Router();

eventRoutes.get("/", async (req, res) => {
  const events = await EventModel.find({});

  res.status(200).send(events);
});

eventRoutes.post("/", async (req, res) => {
  if (!req.body) {
    throw new BadRequestError("Event fields are required");
  }
  const event = await EventModel.create(req.body);

  return res.status(200).send(event);
});
