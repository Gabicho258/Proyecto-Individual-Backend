import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import { userRouter, hotelRouter, commentRouter } from "./api/routes/index.js";

// config enviroment

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`),
});

// connecting to mongo database

const dbConnection = process.env.DB_CONNECTION;
await mongoose.connect(dbConnection);

mongoose.connection.on("error", (err) => {
  console.error("Error: " + err);
});

// initializing server

const app = express();

// server middlewares

app.use(cors());
app.use(express.json());

// routes

app.use("/api", userRouter);
app.use("/api", hotelRouter);
app.use("/api", commentRouter);

app.use("/", (req, res) => {
  res.send("Hotel app API");
});

const PORT = process.env.PORT || 5000;

// Launch server
app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
