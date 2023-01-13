import express from "express";
import { createICSFile } from "../utility/createICS.js";
export const icrRoutes = express.Router();

icrRoutes.post("/generateICS", async (req, res, next) => {
    try {
        // here the request body is an array of event objects
        const events = req.body;
        await createICSFile(events);
        res.status(201).download("../utility/icsFiles/event.ics");
    } catch (err) {
        next(err);
    }
});
