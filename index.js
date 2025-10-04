const express = require("express");
const mongoose = require("mongoose");

const PORT = 8000;
// init app
const app = express();

// view engine 
app.set("view engine","ejs");


//listen server
app.listen(PORT, ()=>{
  console.log("Server on 8000");
});