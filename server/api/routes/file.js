import express from "express";
import { spawn } from "child_process";
const multer = require("multer");
export const fileRoutes = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, "../../nlp/inputs");
    },
    filename: (req, file, callBack) => {
        callBack(null, `${file.originalname}`);
    },
});
let upload = multer({ dest: "../../nlp/inputs/" });

fileRoutes.post(
    "/fileUpload",
    upload.single("file"),
    async (req, res, next) => {
        const file = req.file;
        let events;
        if (!file) {
            throw new BadRequestError("bruh where's the file?");
        }
        console.log(file.filename);
        res.send(file);
        // run python script and get the events
        const pythonProc = spawn("python", ["../../nlp/run.py", file.filename]);
        pythonProc.stdout.on("data", (data) => {
            // data here is events
            events = data;
        });
        return res.status(200).send(events);
    }
);
