import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
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

import GaspHome from '../components/GaspHome.jsx'
import Header from '../components/Header.jsx'
import About from '../components/About.jsx'

function App() {
  
const [ gameName, setGameName] = useState("")

const shouldShowHeader = !['*'].includes(window.location.pathname)
  return (
    <div className='App'>
      {shouldShowHeader && <Header/>}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Index/>} />
          <Route path="/games/:id" element={<GameDetails setGameName={setGameName}/>} />
          <Route path="/games/:id/edit" element={<EditGame/>} />
          <Route path="/games/new" element={<New/>} />
          <Route path="/games/about" element={<About/>} />
          <Route path="/rawg" element={<Rawg gameName={gameName}/>} />
          <Route path="/gasp" element={<GaspHome/>} />
          <Route path="*" element={<FourOFour/>} />
        </Routes>
      </main>
      </div>
  )
}

export default App;
