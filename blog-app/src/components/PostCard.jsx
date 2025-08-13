import React from 'react'
import { useNavigate } from 'react-router-dom'

const PostCard = ({post}) => {
  const navigate=useNavigate()

  return (
    <div className='border border-gray-300 rounded p-4'>
      <div className='flex justify-between'>
        <h4 className='text-xl font-medium'>{post.title}</h4>
        <p className='text-gray-700'>Views: {post.views}</p>
      </div>
      <p className='mt-1'>{post.body}</p>
      <div className='flex text-gray-700 gap-4 mt-2'>
        <p>Likes: {post.reactions.likes}</p>
        <p>Dislikes: {post.reactions.dislikes}</p>
      </div>
      <button onClick={()=>navigate(`/post/${post.id}`)}
      className='bg-gray-700 text-white mt-4 px-2 py-1 rounded cursor-pointer'>View Details</button>
    </div>
  )
}

export default PostCard
