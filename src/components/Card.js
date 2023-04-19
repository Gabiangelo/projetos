import React from 'react';
import './Cards.css'
import LinkButton from './LinkButton.js';
function Cards(props) {
    return (
        <div className='Card'>
            <h1>{props.name}.</h1>
            <LinkButton to={props.to}/>
        </div>
    );
}

export default Cards;