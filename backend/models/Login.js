const mongoose= require("mongoose");
let loginSchema= new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true
  },
  password:{
    type:Number,
    required:true,
  },
  number:{
    type:Number,
    required:true
  },
  details:{
    type:String,
    required:true,
    trim:true,
  },
  email:{
    type:String,
    required:true,
    trim:true
  },
})

const LoginSchema=mongoose.model("LoginSchema",loginSchema);
module.exports= LoginSchema;