const mongoose= require('mongoose');
let signUpSchema= new mongoose.Schema({
    userName:{
        type:String,
        trim:true,
        required:true,
    },
    password:{
        type:Number,
        required:true
    }
})

const SignUpSchema= mongoose.model("SignUpSchema",signUpSchema)
module.exports=SignUpSchema