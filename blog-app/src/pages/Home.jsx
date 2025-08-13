import React, { useContext, useState } from 'react'
import PostCard from '../components/PostCard'
import { AppContext } from '../context/AppContext'

const Home = () => {

  const {data}=useContext(AppContext)
  const {searchValue}=useContext(AppContext)

  const filteredData=data.filter((val)=>val.title.toLowerCase().includes(searchValue.toLowerCase().trim()))
  if(filteredData.length===0){
    return <p className='pl-4'>Loading...</p>
  }

  return (
    <div>
      <h2 className='ml-4 text-gray-500'>Posts: {filteredData.length}</h2>
      <div className='my-4 flex flex-col gap-4 mx-4'>
        {
          filteredData.map(post=>(
            <PostCard key={post.id} post={post}/>
          ))
        }
      </div>
    </div>
  )
}

export default Home