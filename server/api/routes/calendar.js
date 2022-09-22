import express from "express";
import { CalendarModel } from "../models/calendar.js";

export const calendarRoutes = express.Router();

calendarRoutes.get("/", async (req, res) => {
  const calendars = await CalendarModel.find({});

  res.status(200).send(calendars);
});
