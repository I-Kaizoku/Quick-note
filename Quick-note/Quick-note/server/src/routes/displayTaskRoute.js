import express from "express";
import taskModel from "../models/taskModel.js";

const router=express.Router();

router.get('/displaytask',async(req,res)=>{
    taskModel.find()
    .then(tasks=> res.json(tasks))
    .catch(err=>console.log(err))
});
export {router as displayTaskRouter}; 