import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/headder/Navbar';
import Main from './Components/main/Main';
import Aboutus from './Components/about us/Aboutus';
import Gameplay from './Components/gameplay/Gameplay';
import React, { useState } from 'react'


function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [className, setClassName] = useState('App area');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setClassName(isChecked ? 'App area' : 'new-class');
  };
        
  return (
    <div className= {className}>
      <label id='s' className="switch">
          <input id="check" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          <span className="slider round"></span>
      </label>
      
      <BrowserRouter basename="/">
        <Routes>
          <Route path='/' element={<><Navbar/>
          <Main/></>}/>
          <Route path='/Aboutus' element={<Aboutus />}/>
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
