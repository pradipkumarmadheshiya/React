import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import User from "./User"
import "./App.css"

function App() {

  return (
    <Router>
      <nav>
        <ul>
          <li><NavLink className={(e)=>e.isActive ? "black" : ""} to={"/"}>Home</NavLink></li>
          <li><NavLink className={(e)=>e.isActive ? "black" : ""} to={"/login"}>Login</NavLink></li>
          <li><NavLink className={(e)=>e.isActive ? "black" : ""} to={"/users"}>Users</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/users" element={<User/>}/>
      </Routes>
    </Router>
  )
}

export default App
