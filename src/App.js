import './App.css';
import Nav from './pages/Share/Nav';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import MyNetwork from './pages/MyNetwork/MyNetwork';


function App() {
  return (
    <div className="">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/network' element={<MyNetwork/>}/>
        <Route path='/jobs' element={<Home/>}/>
        <Route path='/messaging' element={<Home/>}/>
        <Route path='/notification' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;