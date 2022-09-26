import express from "express";
import { CalendarModel } from "../models/calendar.js";

export const calendarRoutes = express.Router();

calendarRoutes.get("/", async (req, res) => {
  const calendars = await CalendarModel.find({});

  res.status(200).send(calendars);
});

calendarRoutes.post("/", async (req, res) => {
  if (!req.body) {
    throw new BadRequestError("Calendar fields are required");
  }
  const calendar = await CalendarModel.create(req.body);

  return res.status(200).send(calendar);
});
