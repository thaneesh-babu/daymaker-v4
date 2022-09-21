require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors({ credentials: true, origin: `http://localhost:${process.env.CLIENT_PORT}` }));

app.listen(process.env.SERVER_PORT, () => {
    console.log(`running on port ${process.env.SERVER_PORT}`);
});