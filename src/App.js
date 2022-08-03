import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import UserProfile from './pages/UserProfile/UserProfile'
import NotFound from './pages/NotFound/NotFound'
import Messages from './pages/Messages/Messages'

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/messaging" element={<Messages />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Navbar>
    </div>
  )
}

export default App
