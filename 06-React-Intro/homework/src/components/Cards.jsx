import React from 'react';
import Card from './Card.jsx';
import x from './Cards.module.css';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={x.card}>
      {props.cities.map(citie => <Card
      max={citie.main.temp_max}
      min={citie.main.temp_min}
      name={citie.name}
      img={citie.weather[0].icon}
      onClose={() => alert(citie.name)}
      key = {citie.id}
      />)}
    </div>
    )
};