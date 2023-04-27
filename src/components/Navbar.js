import React from 'react';
import './Navbar.css';

import { Link } from 'react-scroll';

function Navbar() {
    return (
        <header>
            <h3>REACT.</h3>
            <nav>
                <Link to="/" spy={true} smooth={true} offset={0} duration={300}><span>#</span>Home</Link>
                <Link to="about" spy={true} smooth={true} offset={-50} duration={300}><span>#</span>Sobre</Link>
                <Link to="exercise" spy={true} smooth={true} offset={50} duration={300}><span>#</span>Exercícios</Link>
            </nav>
        </header>
      );
}

export default Navbar;