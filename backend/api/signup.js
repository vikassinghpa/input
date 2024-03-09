const express= require("express");
const Login=require("../models/Login")
const router=express.Router();

router.post("/signup",async(req,res)=>{
    let {userName}= req.body;
    
    let user=await Login.find({name: new RegExp(userName, 'i')});
    res.status(200).json(user);
    
})
module.exports=router;