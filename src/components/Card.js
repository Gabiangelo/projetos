import React from 'react';
import './Cards.css'
function Cards(props) {
    return (
        <div className='Card'>
            <h1>{props.name}.</h1>
            <button className='question-btn'>Question</button>
        </div>
    );
}

export default Cards;