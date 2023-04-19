import React from 'react';
import './App.css';

import Navbar from './components/Navbar.js';
import Teste from './components/Carousel.js';
import Home from './components/Home';
import Divisor from './components/Divisor.js';


function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Divisor name = "work"/>
    <Teste/>
    </>
  )
}

export default App;
