import React,{useEffect, useRef} from "react"

function UseOfuseRef(){
    const inputRef=useRef(null)
    const divRef=useRef(null)

    function handleReset(){
        inputRef.current.focus()
        inputRef.current.value=""
    }

    const handleDivRef=()=>{
        divRef.current.style.backgroundColor="gray"
    }

    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return(
        <div className="container" ref={divRef} onClick={handleDivRef}>
            <h2>Learning useRef</h2>
            <input ref={inputRef} type="text" name="text" placeholder="Your texts here..." />
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
export default UseOfuseRef