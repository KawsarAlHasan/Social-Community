import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './authentication/Login/Login'
import ResetPassword from './authentication/Login/ResetPassword'
import SignUp from './authentication/Login/SignUp'
import PrivateRoutes from './authentication/routes/PrivateRoutes'
import RedirectToAccount from './authentication/routes/RedirectToAccount'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import UserProfile from './pages/UserProfile/UserProfile'


function App() {
  return (
    <div>
      
      <Routes>
 
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/userProfile" element={<UserProfile></UserProfile>}></Route>
        <Route
          path="/signup"
          element={
            <RedirectToAccount>
              <SignUp></SignUp>
            </RedirectToAccount>
          }
        ></Route>
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Home></Home>
              <Navbar></Navbar>
              
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/reset-password"
          element={
            <RedirectToAccount>
              <ResetPassword></ResetPassword>
            </RedirectToAccount>
          }
        ></Route>
        
        
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
     
    </div>
  )
}

export default App
