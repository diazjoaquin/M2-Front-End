import React from 'react';
import s from './search.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (<div className={s.header}>
    <button className={s.button} onClick = {() => onSearch("Buscando...")}>Agregar</button><input className={s.input} type="text" placeholder="Ciudad..."/>

  </div>)
};