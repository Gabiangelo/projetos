import React from 'react';
import './Navbar.css';

import { Link } from 'react-scroll';

function Navbar() {
    return (
        <header>
            <h3>REACT.</h3>
            <nav>
                <Link to="/" spy={true} smooth={true} offset={10} duration={300}><span>#</span>home</Link>
                <Link to="about" spy={true} smooth={true} offset={10} duration={300}><span>#</span>about</Link>
                <Link to="exercise" spy={true} smooth={true} offset={10} duration={300}><span>#</span>exercises</Link>
            </nav>
        </header>
      );
}

export default Navbar;