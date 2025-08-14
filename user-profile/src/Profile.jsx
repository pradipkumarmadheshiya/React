import React from 'react'
import { useContext } from 'react'
import {AppContext} from "./AppContext"

const Profile = () => {
  const {user, setUser}=useContext(AppContext)

  return (
    <div className='mt-4 ml-4'>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default Profile
