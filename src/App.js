import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Jobs from "./pages/Jobs/Jobs";
import Login from "./pages/Login/Login";
import ResetPassword from "./pages/Login/ResetPassword";
import SignUp from "./pages/Login/SignUp";
import Massaging from "./pages/Massaging/Massaging";
import Network from "./pages/Network/Network";
import Notification from "./pages/Notification/Notification";
import RedirectToAccount from "./pages/RequireAuth/RedirectToAccount";
import RequireAuth from "./pages/RequireAuth/RequireAuth";
import Nav from "./pages/Share/Nav";

function App() {
  return (
    <div className="">
      <Nav />
      <Routes>
              <Route path="/network" element={<Network/>}></Route>
              <Route path="/jobs" element={<Jobs/>}></Route>
              <Route path="/messaging" element={<Massaging/>}></Route>
              <Route path="/notification" element={<Notification/>}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
             
        <Route
          path="/"
          element={
            <RequireAuth>
               <Home></Home>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <RedirectToAccount>
              <SignUp></SignUp>
            </RedirectToAccount>
            
          }
        ></Route>
        <Route
          path="/login"
          element={
            <RequireAuth>
              <Login></Login>
            </RequireAuth>
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
      </Routes>
    </div>
  );
}

export default App;
