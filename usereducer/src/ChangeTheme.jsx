import { useReducer } from "react"
import "./changeTheme.css"

function ChangeTheme(){

    const initialState="light"
    const reducer=(state, action)=>{
        if (action==="light"){
            state="dark"
        }
        else if (action==="dark"){
            state="light"
        }
        return state
    }
    const [state, dispatch]=useReducer(reducer, initialState)

    const changeThemeStyle={
        backgroundColor:state==="light"?"white":"black",
        color:state==="light"?"black":"white",
        height:"100vh",
        width:"100rem"
    }
    console.log(state)
    return(
        <div className="container" style={changeThemeStyle}> 
            <button onClick={()=>dispatch(state)} style={{
                    color:state==="light"?"blue":"white",
                    backgroundColor:state==="light"?"lightgray":"blue"
                }}>Change Theme</button>
        </div>
    )
}
export default ChangeTheme