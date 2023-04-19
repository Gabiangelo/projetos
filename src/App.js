import React from 'react';
import './App.css';

import Navbar from './components/Navbar.js';
import Teste from './components/Carousel.js';
import Home from './components/Home';
import Divisor from './components/Divisor.js';
import Page_Exe1 from './exercices/exe1/Page_Exe1';


function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Divisor name = "work"/>
      <Teste/>
      <Page_Exe1/>
    </>
  )
}

export default App;
