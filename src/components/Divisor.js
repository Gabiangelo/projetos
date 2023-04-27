import React from 'react';
import './Divisor.css';

function Divisor(props) {
  return (
    <div className="divider" id={props.id}>
      <div className="badge">
        <h1>{props.name}</h1>
      </div>
    </div>
  );
}

export default Divisor;
