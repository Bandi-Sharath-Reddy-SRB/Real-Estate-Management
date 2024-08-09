// const express = require("express");

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.use(express.json());

app.listen(3000, () => {
  try {
    console.log("Server is up and running on Port 3000!");
  } catch (error) {
    console.log(error);
  }
});

app.use("/api/user", userRouter);

app.use("/api/auth", authRouter);
