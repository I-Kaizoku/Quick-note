import express from 'express';
import userModel from '../models/userModel.js';
const route=express.Router();

route.post('/register',async(req,res)=>{
    const {email,name,password}=req.body;
    const user=await userModel({email,name,password});
    try {
        user.save();
        res.json({
            message:"account created successfully"
        })
    } catch (error) {
        console.log(error);
    }

})

export {route as registerRoute};