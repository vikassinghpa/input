import React from 'react'
import Login from './Components/Pages/Login'
import {Route,Routes } from 'react-router-dom'
import AllUser from './Components/Pages/AllUser'
import Main from './Components/MainNavigation/Main'
import Show from './Components/Pages/Show'
import SignUp from './Components/Pages/SignUp'
import Update from './Components/Pages/Update'
import Controlled from './Components/MainNavigation/Controlled'

function App() {
  return (
    <div>
      <Main></Main>
      {/* <Controlled>hello</Controlled> */}
      <Routes>
        <Route path="/" element={<SignUp></SignUp>}></Route>
        <Route  path='/user' element={<AllUser></AllUser>}></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path='/show/:id' element={<Show></Show>}></Route>
        <Route path="/update/:id" element={<Update></Update>}></Route>
      </Routes>
    </div>
  )
}

export default App