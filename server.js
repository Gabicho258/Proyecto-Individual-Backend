import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";

import { userRouter, hotelRouter, commentRouter } from "./api/routes/index.js";

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
