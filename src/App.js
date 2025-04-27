import './Fonts/fontCat.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { Home } from './Home/Home';
import { TeaMaker } from './Teamaker/TeaMaker';
import { Store } from './Tools/Store'
import { Catmunity } from './Tools/Catmunity'
import { Catbag } from './Tools/Catbag'
import './App.css';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/teamaker' element={<TeaMaker/>}/>
            <Route path='/store' element={<Store/>}/>
            <Route path='/catmunity' element={<Catmunity/>}/>
            <Route path='/catbag' element={<Catbag/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
