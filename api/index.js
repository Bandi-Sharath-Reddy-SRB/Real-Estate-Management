// const express = require("express");

import express from "express";
const app = express();

app.listen(3000, () => {
  try {
    console.log("Server is up and running on Port 3000!");
  } catch (error) {
    console.log(error);
  }
});
