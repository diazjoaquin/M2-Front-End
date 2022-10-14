import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (<div>
    <button onClick = {() => onSearch("Buscando...")}>Agregar</button><input type="text" placeholder="Ciudad..."/>

  </div>)
};