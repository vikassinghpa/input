import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function Show() {
  let navigate= useNavigate()
    let [userData,setUserData]=useState({});
    let{id} = useParams()
    // console.log(id);
    useEffect(()=>{
       async function show(){

            let res= await axios.get(`http://localhost:8080/show/${id}`);
            setUserData(res.data)
            console.log(res)
        }
        show();
    },[])
    // console.log(userData)
    async function handleDestroy(id){
      // console.log(id)
      let res= await axios.post(`http://localhost:8080/delete/${id}`)
      console.log(res);
  navigate(`/`);
     }
     function handleUpdate(id){
      navigate(`/update/${id}`);
     }
  
         return(
        
        <div className='flex justify-center items-center h-screen'>
  <div className='flex flex-row'>
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{userData.name}</div>
        <p className="text-gray-700 text-base">
          {userData.details}
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{userData.number}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{userData.email}</span>
      </div>
      <div className="px-6 py-4">
        <button onClick={()=>{handleUpdate(userData._id)}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">UPDATE</button>
        <button onClick={()=>{handleDestroy(userData._id)}} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">DELETE</button>
      </div>
    </div>
  </div>
</div>

      )
   
}

export default Show