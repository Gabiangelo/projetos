import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <header>
            <h3>REACT.</h3>
            <nav>
                <a rel="noopener"  href='#home'><span>#</span>home</a>
                <a rel="noopener"  href='#about'><span>#</span>about</a>
                <a rel="noopener"  href='#exercise'><span>#</span>exercises</a>
            </nav>
        </header>
      );
}

export default Navbar;