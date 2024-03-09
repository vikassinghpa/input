const express= require("express");
const cors= require("cors")
const mongoose = require("mongoose");
const formRoute= require("./api/formRoutes")
const signupRoute= require("./api/signup")
const app = express();


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/login');
}
main().then(()=>{
    console.log(`mongoose connected`)
})
.catch((err)=>{
    console.log(`there is a connection in mongoose ${err}`)
})
app.use(express.json());
app.use(express.urlencoded({
    extended:true,
}))
app.use(cors({
    origin:["http://localhost:5173"]
}))

app.use(formRoute);
app.use(signupRoute);

const port=8080;
app.listen(port,()=>{
    console.log(`i am listening at ${port}`)
})