import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar=()=>{

    return(
        <nav>
            <ul>
                <li><NavLink className={(e)=>e.isActive ? "black" : ""} to={"/"}>Home</NavLink></li>
                <li><NavLink className={(e)=>e.isActive ? "black" : ""} to={"/about"}>About</NavLink></li>
                <li><NavLink className={(e)=>e.isActive ? "black" : ""} to={"/contact"}>Contact</NavLink></li>
                <li><NavLink className={(e)=>e.isActive ? "black" : ""} to={"/products"}>Products</NavLink></li>
            </ul>
            <NavLink to={"/login"}>Login</NavLink>
        </nav>
    )
}
export default Navbar