import React from 'react';
import x from "./Card.module.css";

export default function Card(props) {
  // acá va tu código
  return (
    <div>
      <button className={x.font} onClick={props.onClose}>X</button>
      <h4>{props.name}</h4>
      <p>Máximo</p>
      <p>{props.max}</p>
      <p>Mínimo</p>
      <p>{props.min}</p>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="x"/>
    </div>
  );
};