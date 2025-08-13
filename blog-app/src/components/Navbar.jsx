import React, { useContext, useState } from 'react'
import {AppContext} from "../context/AppContext"
import {NavLink} from "react-router-dom"
import {Search} from "lucide-react"

const Navbar = () => {
  const {searchValue, setSearchValue}=useContext(AppContext)

  return (
    <nav className='py-2 flex justify-center gap-6'>
      <div className='flex relative'>
        <Search className='w-5 text-gray-700 absolute z-10 top-1 left-1'/>
        <input className='pl-7 py-1 rounded bg-gray-200'
        type="text" name="title" placeholder='Search by Title' 
        value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
      </div>
      <NavLink to={"/"}
      className={({isActive})=>(isActive? "text-black underline" : "text-gray-600")}
      >Home</NavLink>
      <NavLink to={"/about"}
      className={({isActive})=>(isActive? "text-black underline" : "text-gray-600")}
      >About</NavLink>
    </nav>
  )
}

export default Navbar
