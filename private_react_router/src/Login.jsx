import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Login.css"

const Login=()=>{

    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [isLogin, setIsLogin]=useState(false)
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()

        fetch("https://reqres.in/api/login", {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({email, password})
        })
        .then((res)=>{
            if (!res.ok){
                throw new Error("Login failed")
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            localStorage.setItem("token", data.token)
            setIsLogin(true)
            navigate("/products")

        })
        .catch((error)=>{
            alert(`Login failed! ${error.message}`)
            console.log("this is error:", error)
        })
    }

    return(
        <div className={{isLogin} ? "loginPage" : ""}>
            <h2>Login page</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="emailInp" placeholder="Enter your email..." value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="passwordInp"  placeholder="Enter your password..." required/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login