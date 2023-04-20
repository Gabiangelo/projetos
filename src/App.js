import React from 'react';
import './App.css';

import Navbar from './components/Navbar.js';
import Teste from './components/Carousel.js';
import Home from './Pages/Home';
import Divisor from './components/Divisor.js';
import Footer from './components/Footer';
import Project from './Pages/Project';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Divisor name = "about"/>
      <Project/>
      <Divisor name = "exercise"/>
      <Teste/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App;
