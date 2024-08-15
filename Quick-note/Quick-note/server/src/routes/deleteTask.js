import express from 'express'
import mongoose from 'mongoose'
import taskModel from '../models/taskModel.js';

const router=express.Router();

router.post('/deletetask',async(req,res)=>{
    const {userid}=req.body;
    taskModel.deleteOne({_id:userid})
    .then(e=>{
        res.json({
            message:"deleted"
        })
    })
    .catch(err=>console.log(err));
})

export {router as deleteRouter}