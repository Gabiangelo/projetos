import React from 'react';
import { FaCode} from "react-icons/fa";
import avatar from '../img/Home2.svg';
import './Home.css';

function Home() {
    return ( 
        <div className="container-home">
            <div className="text-content">
                <h1><FaCode/>Aprendendo <span>React</span></h1>
                <p> Aprender React pode ser desafiador, mas gratificante. Compreender os conceitos básicos, familiarizar-se com a estrutura do projeto, criar e manipular componentes, lidar com eventos e gerenciar o estado pode ser complicado. No entanto, à medida que se ganha prática e dedicação, a sensação de dominar o React é verdadeiramente gratificante.</p>
            </div>
            <div className="avatar">
                <img src={avatar} alt="Avatar"/>
            </div>
        </div>
     );
}

export default Home;
