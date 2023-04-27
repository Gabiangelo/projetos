import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <header>
            <h3>REACT.</h3>
            <nav>
                <a href='#home'><span>#</span>home</a>
                <a href='#about'><span>#</span>about</a>
                <a href='#exercise'><span>#</span>exercises</a>
            </nav>
        </header>
      );
}

export default Navbar;