import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

import avatar from '../img/home4.svg';

import './Home.css';

function Home() {
    const [text] = useTypewriter({
        words: ['</> APRENDENDO REACT','</> PROGRAMANDO COM REACT'],
        typeSpeed: 120,
        deleteSpeed: 80,
        loop: 1,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    });

    return ( 
        <div className="container-home">
            <div className="text-content">
                <h1>
                    {text}
                    <Cursor/>
                </h1>
                </div>
            <div className="avatar">
                <img src={avatar} alt="Avatar"/>
            </div>
        </div>
     );
}

export default Home;
