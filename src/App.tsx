import { Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './Components/NavBar'
import { Home } from './Components/Home'
import { Contact } from './Components/Contact'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<div>Projects</div>} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <NavBar />

    </>
  )
}

export default App
