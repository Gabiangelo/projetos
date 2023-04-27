import React from 'react';

import './Project.css';



function Project() {
    
    return ( 
        <div className='container-about'>
            <div className='project-text'>
                <h1><span>#</span>Sobre o Projeto</h1>
                <p>Esta aplicação é uma demonstração do meu aprendizado em React.js, adquirido durante minha trilha de aprendizagem no programa de estágio da Soft Expert. Aqui, apresento a resolução dos exercícios, aplicando os conceitos aprendidos e mostrando minha evolução no desenvolvimento de aplicações com React.</p>
                <h3><span>#</span>Apredizados</h3>
                <p>No desenvolvimento do projeto foi colocado em pratica todo o processo de apredizado do react e javascript. Com isso pude conhecer melhor componentes do react como Router,Json-Server, Swipper e os React Hooks . Tabém utlizei o mecanismo fecth para obter dados db_json que criei, com isso entendi melhor esse conceito.</p>
                <h3><span>#</span>Dificuldades</h3>
                <p>No desenvolvimento do projeto houve difvultades com posicionamento de itens, na obtenção de dados com fecth e na apliacação dos exercícios do react no projeto. Porém com essas dificuldades muito aprendixado.  </p>
            </div>
            <div className='project-img'>
                <img src='img/react.svg' alt='React Logo'/>
            </div>
        </div>
     );
}

export default Project;