import React, {useEffect, useState} from "react"

function SubscribingAtimer(){
    const [count, setCount]=useState(0)
    const [isTimeRunning, setIsTimeRunning]=useState(false)

    useEffect(()=>{
        let timer;
        if (isTimeRunning){
            timer=setInterval(()=>{
                setCount((preCount)=>preCount+1)
            },1000)
        }
        return ()=>clearInterval(timer)

    },[isTimeRunning])

    const startTimer=()=>{
        setIsTimeRunning(true)
    }
    const stopTimer=()=>{
        setIsTimeRunning(false)
        setCount(0)
    }
    
    return (
        <div className="container">
            <h2>Timer: <span style={{color:"red"}}>{count}</span> seconds</h2>
            <div>
                <button onClick={startTimer} disabled={isTimeRunning}>Start timer</button>
                <button onClick={stopTimer} disabled={!isTimeRunning}>Stop timer</button>
            </div>
        </div>
    )
}
export default SubscribingAtimer