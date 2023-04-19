import React from 'react';
import {FaCode} from "react-icons/fa";
import img from '../../img/img1.PNG';

import './Page.css'
function Page_Exe1() {
    return (  
        <div className='container-page'>
            <div className='container-solution'>
                <button className='solution-btn'>Solution</button>
            </div>
            <div className='container-question'>
                <h1><FaCode/>Exercício 1</h1>
                <p>Qual é a má prática no código abaixo e como melhorar este trecho de código?</p>
                <img src={img}/>
            </div>
        </div>
    );
}

export default Page_Exe1;