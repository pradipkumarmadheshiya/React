import React, {useState, useEffect} from "react"

function MouseTracker(){

    const [x, setX]=useState(0)
    const [y, setY]=useState(0)

    useEffect(()=>{
        const mouseMoveFun=(event)=>{
            setX(event.clientX)
            setY(event.clientY)
            console.log("Mouse movement", event)
        }
        window.addEventListener("mousemove", mouseMoveFun)

        // Cleanup event listener on component unmount
        return ()=> (
            window.removeEventListener("mousemove", mouseMoveFun)
        )
    },[])

    return (
        <div>
            <h2>Mouse Tracker</h2>
            <p>Mouse X coordinate : {x}</p>
            <p>Mouse Y coordinate : {y}</p>
        </div>
    )
}

export default MouseTracker