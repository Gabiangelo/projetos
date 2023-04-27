import React from 'react';
import './Card.css'
import LinkButton from './LinkButton.js';

function Cards(props) {
    return (
        <div className='Card'>
            <h1>{props.name}.</h1>
            <LinkButton 
                 id={props.id}
                 name={props.name}
                 imageurl={props.imageurl}
                 question={props.question}
                 path={props.path}
            />
        </div>
    );
}

export default Cards;