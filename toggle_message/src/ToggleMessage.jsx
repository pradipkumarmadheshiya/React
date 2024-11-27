import React, {useReducer} from "react"
import "./ToggleMessage.css"

function ToggleMessage(){
    const initialState={isVisible:false}
    const reducer=(state, action)=>{
        switch(action.type){
            case "toggleVisibility":
                return {...state, isVisible:!state.isVisible}
            default:
                throw new error("Invalid action type")
        }
    }
    
    const [state, dispatch]=useReducer(reducer, initialState)
    return(
        <div className="container">
            <button onClick={()=>{dispatch({type:"toggleVisibility"})}}>Toggle Message</button>
            {
                state.isVisible && <p className="greet">Hello world!</p>
            }
        </div>
    )
}
export default ToggleMessage