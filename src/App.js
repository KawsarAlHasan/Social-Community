import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Login from './authentication/Login/Login'
import SignUp from './authentication/Login/SignUp'
import RedirectToAccount from './authentication/routes/RedirectToAccount'
import PrivateRoutes from './authentication/routes/PrivateRoutes'
import ResetPassword from './authentication/Login/ResetPassword'


function App() {
  return (
    <div>
      
      <Routes>
 
        <Route path="/login" element={<Login></Login>}></Route>
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
