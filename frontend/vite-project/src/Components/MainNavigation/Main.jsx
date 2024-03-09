import React from 'react'
import { Link } from 'react-router-dom'
function Main() {
  return (

    <nav className="bg-gray-800 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <button className="px-4 py-2 border rounded-md border-gray-600 hover:bg-gray-700">
        <Link to={"/user"}>ALL USERS</Link>
      </button>
      <button className="px-4 py-2 border rounded-md border-gray-600 hover:bg-gray-700">
        <Link to={"/login"}>ADD USERS</Link>
      </button>
    </div>
  </nav>
  )
}

export default Main