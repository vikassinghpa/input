import React, { useEffect } from 'react'
import { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function Update() {
    let navigate= useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        details: '',
        phoneNumber: ''
      });
    
      let {id}= useParams();
     
    let b=100;

      function handleSubmit(e){
        e.preventDefault();
        fetch();
       };
       async function fetch(){
        let res= await axios.post(`http://localhost:8080/update/${id}`,formData)
        console.log(res)
        navigate(`/show/${id}`)
       }
    
      return (
        <div className="flex justify-center items-center h-screen">
          <form className="w-full max-w-md" onSubmit={(e)=>{handleSubmit(e)}}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={(e)=>{setFormData({...formData,name:e.target.value})}}
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={(e)=>{setFormData({...formData,email:e.target.value})}}
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="details">
                Details
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="details"
                name="details"
                value={formData.details}
                onChange={(e)=>{setFormData({...formData,details:e.target.value})}}
                placeholder="Enter details"
              ></textarea>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phoneNumber"
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e)=>{setFormData({...formData,phoneNumber:e.target.value})}}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      );
    };

export default Update