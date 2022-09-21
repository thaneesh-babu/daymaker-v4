/*
{
    "name": "string",
    "course": "string",
    "date": "string (refs course)",
    "duration": "string"
}
*/

import { Schema, model } from "mongoose";
import { CourseModel } from "./course";

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: CourseModel,
    required: true,
    autopopulate: true,
  },
  date: {
    type: String,
    required: true,
    index: true,
  },
  duration: {
    type: String,
    required: true,
    index: true,
  },
});

export const EventModel = model("Event", eventSchema);
