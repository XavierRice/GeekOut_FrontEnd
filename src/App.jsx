import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

//PAGES
import Home from '../pages/Home.jsx'
import Index from '../pages/Index.jsx'
import New from '../pages/New.jsx'
import EditGame from '../components/Edit.jsx'
import FourOFour from '../pages/FourOFour.jsx'
import Rawg from '../components/Rawg.jsx'

//COMPONENTS
import GameDetails from '../components/GameDetails.jsx'
import NavBar from '../components/NavBar.jsx'
import GamesCard from '../components/gamesCards.jsx'

function App() {
  
const [ gameName, setGameName] = useState("")


  return (
    <div className='App'>
      <main>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Index/>} />
          <Route path="/games/:id" element={<GameDetails setGameName={setGameName}/>} />
          <Route path="/games/:id/edit" element={<EditGame/>} />
          <Route path="/games/new" element={<New/>} />
          <Route path="/rawg" element={<Rawg gameName={gameName}/>} />
          <Route path="*" element={<FourOFour/>} />
        </Routes>
      </main>
      </div>
  )
}

export default App;
