import React from 'react';
import './Footer.css';

import { FaGithub,FaDiscord,FaInstagram,FaReact } from "react-icons/fa";

function Footer() {
    return ( 
        <div className='divise'>
            <div className='container-footer'>
                <div className='container-up'>
                    <div className='container-logo'>
                        <h4><FaReact/>React</h4>
                        <p>Web designer and front-end developer</p>
                    </div>
                    <div className='container-media'>
                        <h4>Media</h4>
                        <a><FaGithub/></a>
                        <a><FaDiscord/></a>
                        <a><FaInstagram/></a>
                    </div>
                </div>
                <div className='container-copy'>
                    <p>&copy; Copyright 2023. Made by Gabriel</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;