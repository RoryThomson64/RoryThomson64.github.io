import { Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './Components/NavBar'
import { Home } from './Components/Home'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<div>Projects</div>} />
        <Route path="/contacts" element={<div>contacts</div>} />

      </Routes>
      <NavBar />

    </>
  )
}

export default App
