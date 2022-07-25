import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'

/// Components
import { Navbar } from './components/Navbar/Navbar'
import { Wrapper } from './layout/Wrapper'

/// Views
import { Home } from './pages/Home/Home'

function App() {


  return (
    <div className="min-h-screen w-full bg-black/80">
      <Navbar />


      <Wrapper>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Wrapper>



    </div>
  )
}

export default App
