import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AllUser() {
  let [user,setUser]= useState([]);

  useEffect(()=>{
    async function AllUser(){
         let res= await  axios.get("http://localhost:8080/user");
         console.log(res.data);
        setUser(res.data);
       

        
    }
    AllUser()
  },[])
  
    
  return (
    <div>{
        user.map((item,index)=>{
            return <MyChild key={item._id} id={item._id} name={item.name} email={item.email} details={item.details} number={item.number}></MyChild>
        })
        }
    </div>
  )
}


function MyChild(prop){
    let navigate=useNavigate()
    function handleDelete(id){
        // console.log(id);
       navigate(`/show/${id}`)
    }

    async function handleDestroy(id){
        // console.log(id)
        let res= await axios.post(`http://localhost:8080/delete/${id}`)
       
    }
   
    return(
        <div className='flex flex-row ml-96'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{prop.name}</div>
            <p className="text-gray-700 text-base">
             {prop.details}
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{prop.email}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{prop.number}</span>
           
          </div>
          <div className="px-6 py-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">UPDATE</button>
            <button onClick={()=>{handleDelete(prop.id)}} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">VIEW</button>
            <button onClick={()=>{handleDestroy(prop.id)}}  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">DELETE</button>
          </div>
        </div>
            </div>
      )
}

export default AllUser