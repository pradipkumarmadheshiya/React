import {NavLink, useNavigate} from "react-router-dom"
import "./Navbar.css"

const Navbar=()=>{

    const navigate=useNavigate()
    const navigateFun=()=>{
        navigate("/")
    }

    return(
        <nav>
            <ul>
                <li><NavLink className={(e)=>e.isActive? "black" : ""} to={"/"}>Home</NavLink></li>
                <li><NavLink className={(e)=>e.isActive? "black" : ""} to={"/products"}>Products</NavLink></li>
                <li><NavLink className={(e)=>e.isActive? "black" : ""} to={"/about"}>About</NavLink></li>
                <li><NavLink className={(e)=>e.isActive? "black" : ""} to={"/contact"}>Contact</NavLink></li>
            </ul>
            <button onClick={navigateFun}>Go to Home</button>
        </nav>
    )
}
export default Navbar