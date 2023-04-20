import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <header>
            <h3>REACT.</h3>
            <nav>
                <a><span>#</span>home</a>
                <a><span>#</span>about</a>
                <a><span>#</span>exercises</a>
            </nav>
        </header>
      );
}

export default Navbar;