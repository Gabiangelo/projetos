import img1 from "../img/img1.PNG";
import img2 from "../img/img2.PNG";
import img3 from "../img/img3.PNG";
import img4 from "../img/img4.PNG";
import img5 from "../img/img5.PNG";
import img6 from "../img/img6.PNG";
import img7 from "../img/img7.PNG";

export const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export const data = [
    {
      id: 1,
      name: "1",
      imageurl: img1,
      question: "Qual é a má prática no código abaixo e como melhorar este trecho de código?",
      path: "/"
    },
    {
      id: 2,
      name: "2",
      imageurl: img2,
      question: "Por que o método setState não irá funcionar? O que é necessário para que funcione?",
      path: "/exe2"
    },
    {
      id: 3,
      name: "3",
      imageurl: img3,
      question: "Qual a má prática no código abaixo e o que valor do state “name” irá chegar no callback? O novo ou o antigo? Como deveria estar escrito este trecho de código?",
      path: "/exe3"
    },
    {
      id: 4,
      name: "4",
      imageurl: img4,
      question: "O que está sendo feito errado no trecho de código abaixo e por que não deve ser feito?",
      path: "/exe4"
   },
      
    {
      id: 5,
      name: "5",
      imageurl: img5,
      question: "Corrija o trecho de código abaixo para que o state “count” seja atualizado quando o componente montar:",
      path: "/exe5"
    },
    {
      id: 6,
      name: "6",
      imageurl: img6,
      question: "No trecho de código abaixo, a função asyncFunc é assincrona. O que falta para que este código funcione corretamente?",
      path: "/exe6"
    },
    {
      id: 7,
      name: "7",
      imageurl: img7,
      question:"Esse componente abaixo gera um erro no console ao renderizar, corrija a implementação para que não gere mais erro:",
      path: "/exe7"
     }
  ]