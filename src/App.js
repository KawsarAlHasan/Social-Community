import './App.css';
import Nav from './pages/Share/Nav';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/Share/NotFound';

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
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;