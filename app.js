const strict = require("assert/strict");
const { time, timeStamp } = require("console");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const { title } = require("process");
const bodyparse = require("body-parser");
const moment = require("moment");
const mongodb = require("./init/mongodb");
const connectMongodb = require("./init/mongodb");
const Todo = require("./models/Todo");
const todoRouter = require("./routes/todo");
const dotenv = require("dotenv");

//enviroment variable
dotenv.config();

console.log(process.env.CONNECTION_URL);

// init app
const app = express();

//mongodb connection
connectMongodb();

// parse from bodies
app.use(express.urlencoded({ extended: true }));

// view engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyparse.json());
app.use("/", todoRouter);

module.exports = app;
