const express = require('express');
const router= express.Router();
const Login= require("../models/Login")


router.post("/login",async(req,res)=>{
    try{

        let{name,number,details,email,password}= req.body;
        let person= await Login.create({name,number,details,email,password});
        console.log(person,"person");
        res.status(201).json({msg:"user is created successfully"})
   
    }
    catch(err){
        console.log(err);
    }
})

router.get("/user",async(req,res)=>{
    try{

        let allPerson= await Login.find({});
        res.status(200).json(allPerson);
    }
    catch(err){
        res.status(400).json({msg:"there is error in /user in backend"})
    }
   
})

//view
router.get("/show/:id",async(req,res)=>{
    let {id}= req.params;
   
    let user= await Login.findById(id);
    res.status(200).json(user);
})
//delete
router.post("/delete/:id",async(req,res)=>{
    let {id}= req.params;
    let item =await  Login.findByIdAndDelete(id);
    console.log(item,"deleted item")
    res.status(201).json({msg:"deleted succesfully"})
})

//update
router.post("/update/:id",async(req,res)=>{
   let {id}= req.params;
   let {name,email,details,phoneNumber}=req.body;
   let updateddata= await Login.findByIdAndUpdate(id,{name:name,email:email,details:details,phoneNumber:phoneNumber},{new:true},);
   res.status(201).json({msg:"updated succesfully"});
   
   
})

module.exports=router;