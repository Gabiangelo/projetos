import React, { useState, useEffect } from 'react';
import { FaCode } from 'react-icons/fa';

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
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/data/${props.id}`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setResult(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [props.id]); 

  return (
    <div className="container-page">
      <div className="container-solution">{exes[props.id]}</div>
      <div className="container-question">
        <h1>
          <FaCode />
          Exercício {result.name}
        </h1>
        <p>{result.question}</p>
        <img src={require(`${result.imageurl}`).default} alt='imagem exe' /> 

      </div>
    </div>
  );
}

export default Page_Exe;