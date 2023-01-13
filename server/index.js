import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { defaultRouter } from "./api/routes/index.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: `http://127.0.0.1:${process.env.CLIENT_PORT}`,
  })
);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    throw err;
  });

app.use("/", defaultRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`running on port ${process.env.SERVER_PORT}`);
});
