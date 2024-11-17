import { useReducer } from "react"

function Counter(){
    const initialstate=0
    const reducer=(state, action)=>{
        if (action==="increament"){
            state++
        }
        else if (action==="decreament"){
            state--
        }
        return state
    }
    const [state, dispatch]=useReducer(reducer, initialstate)
    return(
        <div className="container">
            <h2>Counter: {state}</h2>
            <button onClick={()=>dispatch("increament")}>+</button>
            <button onClick={()=>dispatch("decreament")}>-</button>
        </div>
    )
}
export default Counter