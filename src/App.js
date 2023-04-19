import React from 'react';
import './App.css';

import Navbar from './components/Navbar.js';
import Teste from './components/Carousel.js';
import Home from './Pages/Home';
import Divisor from './components/Divisor.js';
import Page_Exe1 from './exercices/exe1/Page_Exe1';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Divisor name = "work"/>
      <Teste/>
      <Outlet/>
      <Divisor name = "contact"/>

    </>
  )
}

export default App;
