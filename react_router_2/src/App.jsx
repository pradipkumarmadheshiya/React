import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Products from './Products'
import Contact from './Contact'
import './App.css'

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App
