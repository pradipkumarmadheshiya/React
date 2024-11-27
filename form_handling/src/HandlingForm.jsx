import React, { useReducer } from "react"

function HandlingForm(){
    const initialstate={email:"", password:""}
    const reducer=(state, action)=>{
        switch(action.type){
            case "email" :
                return {...state, email:action.payload}
            case "password":
                return {...state, password:action.payload}
            case "reset" :
                return {...initialstate}
            default :
                throw new Error("invalid action type")
        }
    }
    const [state, dispatch]=useReducer(reducer, initialstate)

    const handleSubmit=(e)=>{
        e.preventDefault()
    }

    return(
        <div className="container">
            <h2>Form Handling</h2>
            {
                state.email==="" && state.password==="" ? (
                    <div>No details found</div>
                ) : (
                    <div>
                        <div>User email: {state.email}</div>
                        <div>User Password:{state.password}</div>
                    </div>
                )
            }
            {/* Form for entering email and password */}
            <form onSubmit={handleSubmit}>
                <label>
                    User email
                    <input type="email" name="email" placeholder="Enter email..." value={state.email} onChange={(e)=>{dispatch({type:"email", payload:e.target.value})}}/>
                </label>
                <label>
                    Password
                    <input type="password" name="password" placeholder="Enter password..." value={state.password} onChange={(e)=>{dispatch({type:"password", payload:e.target.value})}}/>
                </label>
                <button type="submit">Submit</button>
                <button type="button" onClick={()=>dispatch({type:"reset"})}>Reset</button>
            </form>
        </div>
    )
}
export default HandlingForm