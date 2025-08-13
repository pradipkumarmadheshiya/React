import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const PostDetails = () => {
  const {id} = useParams();
  const {data}=useContext(AppContext)

  const post=data.find((post)=>post.id==id)

  if(!post) return <p className="pl-4">Loading...</p>
  return (
    <div>
      <div className="border border-gray-300 rounded p-4">
        <div className="flex justify-between">
          <h4 className="text-xl font-medium">{post?.title}</h4>
          <p className="text-gray-700">Views: {post?.views}</p>
        </div>
        <p className="mt-1">{post?.body}</p>
        <div className="flex text-gray-700 gap-4 mt-2">
          <p>Likes: {post?.reactions.likes}</p>
          <p>Dislikes: {post?.reactions.dislikes}</p>
        </div>
        
      </div>
    </div>
  );
};

export default PostDetails;
