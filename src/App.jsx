import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//PAGES
import Home from '../pages/Home.jsx'
import FourOFour from '../pages/FourOFour.jsx'


//COMPONENTS

import './App.css'

function App() {
  

  return (
    <div className='App'>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<FourOFour/>} />
        </Routes>
      </main>
      </div>
  )
}

export default App
