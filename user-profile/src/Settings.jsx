import React from 'react'
import { useContext } from 'react'
import { AppContext } from './AppContext'
import { useState } from 'react'

const Settings = () => {
  const {setUser}=useContext(AppContext)
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")

  function handleSubmit(e){
    e.preventDefault()
    setUser({name, email})
    setName("")
    setEmail("")
  }

  return (
    <div className='ml-4 mt-4'>
      <h4 className='text-lg mb-2'>Update Your Profile</h4>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <label htmlFor="name">Name:</label>
        <input value={name} onChange={(e)=>setName(e.target.value)}
        className='bg-gray-100 px-2 py-1 ' type="text" name="name" placeholder='Your name' />
        <label htmlFor="email">Email:</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)}
        className='bg-gray-100 px-2 py-1 ' type="text" name="email" placeholder='Your email' />
        <button type='submit' className='bg-gray-500 text-white px-2 py-1 rounded cursor-pointer mt-4'>Submit</button>
      </form>
    </div>
  )
}

export default Settings
