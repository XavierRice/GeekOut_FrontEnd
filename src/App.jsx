import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//PAGES
import Home from '../pages/Home.jsx'
import Index from '../pages/Index.jsx'
import FourOFour from '../pages/FourOFour.jsx'
import TwitchGame from '../components/API.jsx'

//COMPONENTS

import './App.css'

function App() {
  

  return (
    <div className='App'>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Index/>} />
          <Route path="/twitch" element={<TwitchGame/>} />
          <Route path="*" element={<FourOFour/>} />
        </Routes>
      </main>
      </div>
  )
}

export default App;
