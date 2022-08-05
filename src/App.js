import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./authentication/Login/Login";
import ResetPassword from "./authentication/Login/ResetPassword";
import SignUp from "./authentication/Login/SignUp";
import PrivateRoutes from "./authentication/routes/PrivateRoutes";
import RedirectToAccount from "./authentication/routes/RedirectToAccount";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import UserProfile from "./pages/UserProfile/UserProfile";

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
  );
}

export default App;
