import React from 'react';
import a from "./Card.module.css"

// sabemos que props es un obj.



export default function Card(props) {
  // acá va tu código
  return (
    <div className={a.box}>
      <button className={a.boton} onClick={props.onClose}>X</button>
      <h4 className={a.city}>{props.name}</h4>
      
      <ul className={a.list}>
        <li className={a.data}>Máximo</li>
        <li className={a.data}>{props.max}</li>   
      </ul>
      <ul className={a.list}>
        <li className={a.data}>Mínimo</li>
        <li className={a.data}>{props.min}</li>
      </ul>
      <img className={a.img} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="x"/>
    </div>
  );
};

// si hago destructuring en el argumento puedo obviar props dentro de mi función. 

// export default function Card({max, min, name, img, onClose}) {
//   // acá va tu código
//   return (
//     <div>
//       <button onClick={onClose}>X</button>
//       <h4>{name}</h4>
//       <p>Máximo</p>
//       <p>{max}</p>
//       <p>Mínimo</p>
//       <p>{min}</p>
//       <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="not founded"/>
//     </div>
//     )
// };
