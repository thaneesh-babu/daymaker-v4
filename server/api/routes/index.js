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

import { spawn } from "child_process";

// https://stackoverflow.com/questions/23450534/how-to-call-a-python-function-from-node-js
// for debugging: https://stackoverflow.com/questions/4482686/check-synchronously-if-file-directory-exists-in-node-js
defaultRouter.get("/python", (req, res) => {
    console.log("route hit")
    const path = 'nlp/hello.py'
    const pyScript = spawn('python', [path])
    pyScript.stdout.on('data', data => {
        console.log(data.toString());
        res.json({ message: data }).status(200);
    });
})
