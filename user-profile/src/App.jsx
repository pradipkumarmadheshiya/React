import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import Profile from "./Profile"
import Settings from "./Settings"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
    </div>
  )
}

export default App