import {NavLink} from "react-router-dom"

const Navbar=()=>{

    return(
        <nav>
            <ul>
                <li><NavLink className={(e)=>e.isActive?"black":""} to={"/"}>Home</NavLink></li>
                <li><NavLink className={(e)=>e.isActive?"black":""} to={"/products"}>Products</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar