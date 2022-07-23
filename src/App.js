import './App.css';
import Nav from './Pages/Share/Nav';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/network' element={<Home/>}/>
        <Route path='/jobs' element={<Home/>}/>
        <Route path='/messaging' element={<Home/>}/>
        <Route path='/notification' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;