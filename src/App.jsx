import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [activeNav, setActiveNav] = useState("home")

  return (
    <>
    <BrowserRouter>
      <Navbar activeNav={activeNav}/>

      <Routes>
        <Route path='/' element={<Home activeNav={setActiveNav}/>} />
        <Route path='/about' element={<About activeNav={setActiveNav}/>} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
