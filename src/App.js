import React from 'react';
import './App.css';

import Navbar from './components/Navbar.js';
import Carousel from './components/Carousel.js';
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
      <Divisor name = "Sobre" id='about'/>
      <Project/>
      <Divisor name = "Exercícios" id='exercise'/>
      <div className='teste'>
        <Carousel/>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App;
