import React from 'react';
import {FaCode} from "react-icons/fa";
import { useLocation } from 'react-router-dom';

import Exe1 from './Exe1';
import Exe2 from './Exe2';
import Exe3 from './Exe3';
import Exe4 from './Exe4';
import Exe5 from './Exe5';
import Exe6 from './Exe6';
import Exe7 from './Exe7';

import './Page.css';

function Page_Exe() {
    let {state} = useLocation();
    const exes = [<Exe1/>,<Exe2/>,<Exe3/>,<Exe4/>,<Exe5/>,<Exe6/>,<Exe7/>];
    return (  
        <div className='container-page'>
            <div className='container-solution'>
                {exes[state.id]}
            </div>
            <div className='container-question'>
                <h1><FaCode/>Exercício {state.name}</h1>
                <p>{state.question}</p>
                <img src={state.imageurl} alt='Question'/>
            </div>
        </div>
    );
}

export default Page_Exe;