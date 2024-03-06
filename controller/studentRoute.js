const express = require("express");

const studentRoute = express.Router();
const mongoose = require("mongoose");
const studentSchema = require("../model/schema");

//CREATE
studentRoute.post("/create-student",(req,res)=>{
  studentSchema.create(req.body,(err,data)=>{
    if(err){
      return err;
    }
    else{
      res.json(data);
    }
  })
})

//READ
studentRoute.get("/",(req,res)=>{
  studentSchema.find((err,data)=>{
    if(err){
      return err;
    }
    else{
      res.json(data); 
    }
  })
})

//UPDATE
studentRoute.route("/update-student/:id")
.get((req,res)=>{
  studentSchema.find(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
    if(err){
      return err;
    }
    else{
      res.json(data);
    }
  })
})
.put((req,res)=>{
  studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
  {$set: req.body},
  (err,data)=>{
    if(err){
      return err;
    }
    else{
      res.json(data);
    }
  })
})



//DELETE
studentRoute.delete("/delete-student/:id",(req,res)=>{
  studentSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
    if(err){
      return err;
    }
    else{
      res.json(data);
    }
  })
})




module.exports = studentRoute;