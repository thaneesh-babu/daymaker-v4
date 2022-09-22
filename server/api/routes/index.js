import express from "express";

import { userRoutes } from "./user.js";
import { eventRoutes } from "./event.js";
import { courseRoutes } from "./course.js";
import { calendarRoutes } from "./calendar.js";

export const defaultRouter = express.Router();

defaultRouter.use("/users", userRoutes);
defaultRouter.use("/events", eventRoutes);
defaultRouter.use("/courses", courseRoutes);
defaultRouter.use("/calendars", calendarRoutes);

