import express from "express";
import { CourseModel } from "../models/course.js";

export const courseRoutes = express.Router();

courseRoutes.get("/", async (req, res) => {
  const courses = await CourseModel.find({});

  return res.status(200).send(courses);
});

courseRoutes.post("/", async (req, res) => {
  if (!req.body) {
    throw new BadRequestError("Course fields are required");
  }
  const course = await CourseModel.create(req.body);

  return res.status(200).send(course);
});

courseRoutes.patch("/:id", async (req, res) => {
  if (!req.body) {
    throw new BadRequestError("Course fields are required");
  }
  const course = await CourseModel.findByIdAndUpdate(
    req.params.id,
    {
      ...req.body,
    },
    { new: true }
  );

  return res.status(200).send(course);
});
