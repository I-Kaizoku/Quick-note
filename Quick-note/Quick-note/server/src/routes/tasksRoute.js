import express  from "express";
import taskModel from "../models/taskModel.js";

const router=express.Router();

router.post('/addtask',async(req,res)=>{
    const {task,subject}=req.body;
    const day=new Date();
    var date1=day.toLocaleDateString().toString();
    const newtask=await taskModel({task:task,subject:subject,date:date1});
    try {
        newtask.save();
        res.json({
            message:"Task added successfully"
        })
    } catch (error) {
        console.log(error);
    }
    
})

export {router as taskRoute};