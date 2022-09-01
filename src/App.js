import './App.css';
import React from 'react';
import Home from './Components/Pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Deals from './Components/Pages/Deals';
import Success from './Components/Pages/Success';
import Courcess from './Components/Pages/Courcess';




function App() {
  return (
    <div>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/Deals' element={<Deals/>}></Route>
        <Route path='/Success' element={<Success  />}></Route>
        <Route path='/courses' element={<Courcess/>}></Route>

        
        
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
