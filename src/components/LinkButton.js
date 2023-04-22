import { Link } from 'react-router-dom';
import './LinkButton.css';
import React from 'react';

function LinkButton(props) {
  return (
    <Link
    to={{
        pathname: props.path,
        state: { data: 'Informação que será passada' }
      }}
    >
      <button className='question-btn'>Solução</button>
    </Link>
  )
}

export default LinkButton;