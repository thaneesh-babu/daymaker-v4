import express from "express";
import { spawn } from "child_process";
import path from "path";
import multer from "multer";
// import uploadMiddleware from "../middleware/upload.js";

export const fileRoutes = express.Router();

// let upload = multer({ dest: "../../nlp/inputs/" });

// const upload = multer({ dest: `nlp/inputs/syllabus_fa21` }).single("file");

// fileRoutes.post("/fileUpload", async (req, res, next) => {
//     upload(req, res, (err) => {
//         const file = req.file;
//         const pythonProc = spawn("python", ["nlp/run.py", file.originalname]);
//         pythonProc.stdout.on("data", function (data) {
//             console.log("data: ", data.toString());
//             events = data;
//         });
//         console.log("file: ", file);
//         let events;
//         if (err) {
//             throw new BadRequestError("bruh rip");
//         }
//         if (!file) {
//             throw new BadRequestError("bruh where's the file?");
//         }
//         console.log("events: ", events);
//         return res.status(200).send(events);
//     });
// });

// fileRoutes.post("/fileUpload", uploadMiddleware("file"), async (req, res, next) => {
//     try {
//         const file = req.file;
//         console.log("file: ", file);
//         let events;
//         if (!file) {
//             throw new BadRequestError("bruh where's the file?");
//         }

//         return res.status(200).send(events);
//     } catch (err) {
//         next(err);
//     }
// }

// const storage = multer.diskStorage({
//     destination: (req, file, callBack) => {
//         callBack(null, "../../nlp/inputs");
//     },
//     filename: (req, file, callBack) => {
//         callBack(null, `${file.originalname}`);
//     },
// });
// let upload = multer({ dest: "nlp/inputs/" });

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "nlp/inputs/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

let upload = multer({ storage: storage });

fileRoutes.post("/fileUpload", upload.single("file"), (req, res) => {
    const file = req.file;
    let events;
    if (!file) {
        throw new BadRequestError("bruh where's the file?");
    }
    console.log("filename: ", file.filename);

    const pythonProc = spawn("python", ["nlp/run.py", file.filename]);
    pythonProc.stdout.on("data", (data) => {
        console.log("data: ", data.toString());
        events = data;
        return res.status(200).send(events);
    });
    console.log("after proc");
});
