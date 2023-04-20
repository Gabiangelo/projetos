import { Link } from 'react-router-dom';
import './LinkButton.css';
import React from 'react';

function LinkButton(props) {
    const path = props.path;
    const id = props.id;
    const name = props.name;
    const question = props.question;
    const url = props.imageurl;
    return (
        <Link 
            to ={props.path}
            state = {{ 
                id: props.id,
                name: props.name,
                question: props.question,
                url: props.imageurl,
            }} 
        >
           <button className='question-btn'>Solução</button>
        </Link>
    )
}

export default LinkButton;