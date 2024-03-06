
const express = require("express");
const app = express();
const studentRoute = require("./controller/studentRoute");
const bodyParser =require("body-parser");
const cors = require("cors");

const mongoose = require("mongoose");
mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://TpNuke:sharan2004@cluster0.3o4dhpb.mongodb.net/collegedb")
var db  = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error Occurred"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors()); 
app.use("/studentRoute",studentRoute);

app.listen(4000,()=>{
  console.log("Server started at 4000");
})