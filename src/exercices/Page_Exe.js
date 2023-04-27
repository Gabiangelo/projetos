import React, { useState, useEffect } from 'react';


import Exe1 from './Exe1';
import Exe2 from './Exe2';
import Exe3 from './Exe3';
import Exe4 from './Exe4';
import Exe5 from './Exe5';
import Exe6 from './Exe6';
import Exe7 from './Exe7';

import './Page.css';


function Page_Exe(props) {
  const exes = [<Exe1 />, <Exe2 />, <Exe3 />, <Exe4 />, <Exe5 />, <Exe6 />, <Exe7 />];
  
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch(`https://json-exe.vercel.app/data/${props.id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setResult(data)
      })
      .catch((err) => console.log(err))
  }, [props.id])

  return (
    <div className="container-page">
        <div className="container-solution">
          <h2>Solução</h2>
          <div className='exe-content'>{exes[props.id]}</div>
      </div>
      <div className="container-question">
        <div>
          <h2>
            Exercício {result.name}
          </h2>
          <p>{result.question}</p>
        </div>
        <div className=''>
          <img src={result.url}></img>
        </div>
      </div>
    </div>
  );
}

export default Page_Exe;
