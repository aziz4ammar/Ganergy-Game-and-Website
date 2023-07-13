import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/headder/Navbar';
import Main from './Components/main/Main';
import Aboutus from './Components/about us/Aboutus';
import Gameplay from './Components/gameplay/Gameplay';

function App() {
  return (
    <div className="App area">
      <ul class="circles">
      <BrowserRouter basename="/">
        <Routes>
          <Route path='/' element={<><Navbar /><Main/></>}/>
          <Route path='/Aboutus' element={<Aboutus/>}/>
          <Route path='/Gameplay' element={<Gameplay/>}/>
        </Routes>
      </BrowserRouter>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
      
    </div>
  );
}

export default App;
