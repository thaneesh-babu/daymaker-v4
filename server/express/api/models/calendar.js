/*
{
    "name": "string",
    "user": "string (refs user)"
}
*/

import { Schema, model } from "mongoose";
import { UserModel } from "./user.js";

const calendarSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
    autopopulate: true,
  },
});

export const CalendarModel = model("Calendar", calendarSchema);
