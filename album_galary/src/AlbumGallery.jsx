import React, {useState, useEffect} from "react"
import "./albumGallery.css"

function AlbumGallery(){

    const [data, setData]=useState([])
    const [newUserId, setNewUserId]=useState("")
    const [newTitle, setNewTitle]=useState("")

    const url="https://jsonplaceholder.typicode.com/albums"
    

    useEffect(()=>{

        const fetchingFun=async()=>{
            try{
                const res=await fetch (url)
                const value=await res.json()
                setData(value)
            }
            catch(error){
                console.log("Error:", error)
            }
        }
        fetchingFun()
          
    },[])

    const addAlbumFun=async(e)=>{
        
        if (!(newTitle.trim()) || !newUserId){
            alert("inputs cannot be empty")
            setNewTitle("")
            setNewUserId("")
            return
        }

        const id=data.length+1

        const newAlbum={"userId":newUserId, id, "title":newTitle}

        try{
            const res=await fetch(url, {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(newAlbum)
            })
            const newValue=await res.json()
            console.log(newValue)
            setData([newValue, ...data])
            setNewTitle("")
            setNewUserId("")
        }
        catch(error){
            console.log("Error:", error)
        }
    }

    return(
        <div className="container">
            <h2>Album Gallery with add album feature</h2>
            <div id="albumInp">
                <label>
                    User Id
                    <input type="number" name="id" id="user_id" value={newUserId} onChange={(e)=>setNewUserId(e.target.value)}/>
                </label>
                <label>
                    Title
                    <input type="text" name="title" id="title" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}/>
                </label>
                <button type="submit" className="addBtn" onClick={addAlbumFun}>Add</button>
            </div>
            <div className="album_box">
                {
                    data.map((item)=>(
                        <div className="card" key={item.id}>
                            <p><span>User Id: </span>{item.userId}</p>
                            <p><span>Id: </span>{item.id}</p>
                            <p><span>Title: </span>{item.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default AlbumGallery