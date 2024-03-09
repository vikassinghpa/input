import React, { useState } from 'react'

function Controlled() {
    let [name,setName]= useState("");
    let [phone, setPhone]=useState("");

    function habdlephoneChange(e){
       setPhone(e.target.value)
    console.log(e.target)
    }
    function handlename(e){
        setName(e.target.value)
console.log(e.target)
    }
  return (
    <div>
        <form action="">
            <label htmlFor=""></label>
            <input type="text" value={name} onChange={(e)=>{handlename(e)}} />

            <label htmlFor=""></label>
            <input type="number" value={phone} onChange={(e)=>{habdlephoneChange(e)}} />
        </form>
    </div>
  )
}

export default Controlled