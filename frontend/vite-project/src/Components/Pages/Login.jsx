import React, { useRef } from 'react'
import axios from "axios"
import { Navigate } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
function Login() {
  let navigate= useNavigate()
    let nameRef= useRef();
    let numRef = useRef();
    let detailRef= useRef();
    let emailRef= useRef();
    let passRef= useRef()
  async function handleSubmit(e){
   e.preventDefault();
   let name= nameRef.current.value;
   let email= emailRef.current.value;
   let number= numRef.current.value;
   let details= detailRef.current.value;
   let password=passRef.current.value
   
   try{

      let res= await axios.post("http://localhost:8080/login",{name,email,number,details,password});
      console.log(res)
    }
    catch(err){
        console.log(`cannot send login info`)
    }
     navigate("/");
   }

  return (
    
    <div className="bg-slate-400 w-96 p-6 rounded-lg ml-96">
  <form onSubmit={handleSubmit} className="space-y-4">
    <label htmlFor="name" className="block text-white">Name:</label>
    <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" ref={nameRef} />

    <label htmlFor="email" className="block text-white">Email:</label>
    <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" ref={emailRef} />
     
    <label htmlFor="password" className="block text-white">Password:</label>
    <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" ref={passRef} />

    <label htmlFor="number" className="block text-white">Number:</label>
    <input type="number" id="number" name="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" ref={numRef} />

    <label htmlFor="message" className="block text-white">Details:</label>
    <textarea id="message" name="details" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" ref={detailRef}></textarea>

    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">ADD</button>
  </form>
</div>

  )
}

export default Login