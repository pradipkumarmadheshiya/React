import React,{useRef} from "react"

function DisplayValue(){
    const inputRef=useRef()
    const divRef=useRef()

    const handleReset=()=>{
        inputRef.current.value=""
        inputRef.current.focus()
        forceUpdate()
    }

    const handleInput=()=>{
        // Force re-render by using a dummy trigger
        forceUpdate()
    }

    function handleDivRef(){
        divRef.current.style.backgroundColor="gray"
    }

    const forceUpdate = React.useReducer(() => ({}), {})[1];
    return(
        <div ref={divRef} onClick={handleDivRef}>
            <h2>Display Input</h2>
            <p>Current Value: <b>{inputRef.current?.value || "Nothing yet"}</b></p>
            <input ref={inputRef} type="text" name="text" placeholder="Your texts here..." onChange={handleInput}/>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
export default DisplayValue