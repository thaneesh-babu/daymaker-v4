// import express from "express";
// import { spawn } from "child_process";
// import path from "path";
// import multer from "multer";

// export const fileRoutes = express.Router();

// let storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "nlp/inputs/");
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     },
// });

// let upload = multer({ storage: storage });

// fileRoutes.post("/fileUpload", upload.single("file"), (req, res) => {
//     const file = req.file;
//     let events;
//     if (!file) {
//         throw new BadRequestError("bruh where's the file?");
//     }
//     console.log("filename: ", file.filename);

//     const pythonProc = spawn("python", ["nlp/run.py", file.filename]);
//     pythonProc.stdout.on("data", (data) => {
//         console.log("data: ", data.toString());
//         events = data;
//         return res.status(200).send(events);
//     });
//     console.log("after proc");
// });
