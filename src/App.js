import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import UserProfile from './pages/UserProfile/UserProfile'

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userProfile" element={<UserProfile />} />
        </Routes>
      </Navbar>
    </div>
  )
}

export default App
