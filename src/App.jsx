import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

//PAGES
import Home from '../pages/Home.jsx'
import Index from '../pages/Index.jsx'
import New from '../pages/New.jsx'
import EditGame from '../components/Edit.jsx'
import FourOFour from '../pages/FourOFour.jsx'
import TwitchGame from '../components/API.jsx'

//COMPONENTS
import GameDetails from '../components/GameDetails.jsx'

function App() {
  

  return (
    <div className='App'>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Index/>} />
          <Route path="/games/:id" element={<GameDetails/>} />
          <Route path="/games/:id/edit" element={<EditGame/>} />
          <Route path="/games/new" element={<New/>} />
          <Route path="/twitch" element={<TwitchGame/>} />
          <Route path="*" element={<FourOFour/>} />
        </Routes>
      </main>
      </div>
  )
}

export default App;
