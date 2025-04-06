import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Products from "./Products"
import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import PrivateRoute from "./PrivateRoute"

function App() {

  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/products" element={
          <PrivateRoute>
              <Products/>
            </PrivateRoute>
          }/>
      </Routes>
    </Router>
  )
}

export default App
