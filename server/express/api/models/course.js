/*
{
    "name": "string",
    "calendar": "string (refs calendar)"
}
*/

import { Schema, model } from "mongoose";
import { CalendarModel } from "./calendar.js";

const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  calendar: {
    type: Schema.Types.ObjectId,
    ref: CalendarModel,
    required: true,
    autopopulate: true,
  },
});

export const CourseModel = model("Course", courseSchema);