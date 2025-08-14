import React from 'react'
import {Routes, Route, Link} from "react-router-dom"
import Home from "./Home"
import Profile from "./Profile"
import Settings from "./Settings"

const App = () => {
  return (
    <div>
      <nav className='flex gap-4 text-gray-600 mt-4 ml-4'>
        <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>Profile</Link>
        <Link to={"/settings"}>Settings</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
    </div>
  )
}

export default App