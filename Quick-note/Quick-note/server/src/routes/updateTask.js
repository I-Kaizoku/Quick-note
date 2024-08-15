import express from 'express'
import mongoose from 'mongoose'
import taskModel from '../models/taskModel.js';
const router=express.Router();
router.put('/updateTask/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        
        const updatedTask=await taskModel.findByIdAndUpdate(
            {_id:id},
            req.body,
            {
                new:true
            })
            res.json({
                message:"updated"
            })

        
    } catch (error) {
        console.log(error)
    }
})

export {router as updateRouter}