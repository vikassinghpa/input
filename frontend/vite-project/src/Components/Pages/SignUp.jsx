import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function SignUp() {
  let [userName, setuserName] = useState("");
  let [password,setPassword] = useState("");
  let navigate= useNavigate()
  console.log(userName);
  console.log(password);
  async function handleSubmit(e){
    e.preventDefault();
      let res= await axios.post("http://localhost:8080/signup",{userName,password});
      console.log(res.data[0]._id)
      let id=res.data[0]._id;
      console.log(id)
      navigate(`/show/${id}`);

  }

  return (
    <div className="max-w-md mx-auto mt-8">
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          onChange={(e)=>{setuserName(e.target.value)}}
        //   onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
          
       onChange={(e)=>{setPassword(e.target.value)}}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
    <p>dont have the account olease register <Link to={"/login"}>HERE</Link></p>
  </div>
  )
}

export default SignUp