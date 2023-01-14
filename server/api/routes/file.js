import express from "express";
import { spawn } from "child_process";
import multer from "multer";
export const fileRoutes = express.Router();

// const storage = multer.diskStorage({
//     destination: (req, file, callBack) => {
//         callBack(null, "../../nlp/inputs");
//     },
//     filename: (req, file, callBack) => {
//         callBack(null, `${file.originalname}`);
//     },
// });

// let upload = multer({ dest: "../../nlp/inputs/" });

const upload = multer({ dest: `../../nlp/inputs/` }).single("file");

fileRoutes.post("/", (req, res) => {
    const python = spawn("python", ["bruh.py"]);
    python.stdout.on("data", function (data) {
        console.log("data: ", data);
        res.status(200).send(data.toString());
    });
    console.log("done");
});

fileRoutes.post("/fileUpload", async (req, res, next) => {
    const pythonProc = spawn("python", ["bruh.py"]);
    pythonProc.stdout.on("data", function (data) {
        console.log("data: ", data);
        // events = data;
    });
    console.log("nice");
    upload(req, res, (err) => {
        const file = req.file;
        console.log("file: ", file);
        let events;
        if (err) {
            throw new BadRequestError("bruh rip");
        }
        if (!file) {
            throw new BadRequestError("bruh where's the file?");
        }
        console.log("events: ", events);
        return res.status(200).send(events);
    });
});
