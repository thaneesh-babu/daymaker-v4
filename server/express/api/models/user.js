/*
{
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "googleId": "string"
}
*/

import { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    index: true,
  },
  lastName: {
    type: String,
    required: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
  },
  googleId: {
    type: String,
    required: true,
    index: true,
  },
});

export const UserModel = model("User", userSchema);
