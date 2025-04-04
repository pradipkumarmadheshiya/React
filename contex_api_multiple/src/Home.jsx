import { useContext } from "react"
import ThemeContext from "./ThemeContext"
import UserContext from "./UserContext"
import "./Home.css"

const Home=()=>{

    const {theme, toggleTheme}=useContext(ThemeContext)
    const {user, login, logout}=useContext(UserContext)

    return (
        <div className={theme}>
            <button onClick={toggleTheme}>Theme: {theme}</button>
            <p>User: {user ? user.name : "User not logged in"}</p>
            {
                user ? <button onClick={logout}>Logout</button> : <button onClick={()=>login({name:"Pradip Madheshiya"})}>Login</button>
            }
        </div>
    )
}
export default Home