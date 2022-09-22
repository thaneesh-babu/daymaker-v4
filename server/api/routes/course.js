import express from "express";
import { CourseModel } from "../models/course.js";

export const courseRoutes = express.Router();

courseRoutes.get("/", async (req, res) => {
  const courses = await CourseModel.find({});

  res.status(200).send(courses);
});
