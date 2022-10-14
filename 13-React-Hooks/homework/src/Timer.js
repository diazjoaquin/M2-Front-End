import React, { useState, useEffect, useRef } from 'react';
import './Timer.css'

const Timer = () => {

  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador');
  const myRef = useRef(null);
  
  function toggle() {
    setActivo(!activo);
  }

  function reset() {
    setSegundos(0);
    setActivo(false);
    myRef.current.value = null;
  }

  function cambioTipo() {
    if(tipo === 'Contador') setTipo('Cuenta Regresiva')
    if(tipo === 'Cuenta Regresiva') setTipo('Contador')
  }

  function agregaSegundos() {
    let ref = myRef.current.value
    if (ref < 0) { 
      alert("No se pueden ingresar números negativos")
    } else setSegundos(ref);
}

useEffect(() => {
  let intervalo = null;
  if (activo && tipo === 'Contador') {
    intervalo = setInterval(() => {
      setSegundos(segundos => segundos + 1);
    }, 1000);
  }
  if (activo && tipo === 'Cuenta Regresiva') {
    intervalo = setInterval(() => {
      setSegundos(segundos => segundos - 1);
    }, 1000);
  }
  if (!activo && segundos !== 0 && tipo === 'Contador') {
    clearInterval(intervalo);
  }
  if (segundos === 0 && tipo === 'Cuenta Regresiva') {
    reset();
    clearInterval(intervalo);
  }

  return () => clearInterval(intervalo);
}, [activo, segundos, tipo]);


    return (
      <div className="app">
        <div className="time">
          {segundos}s
        </div>
        <div className="row">
          {/* si activo es true el className de button cambia a 'active', de lo contrario se setea en inactive.  */}
          <button className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`} onClick={toggle}>
            {/* ademas, si activo es true, el texto de button será Pausa, de lo contrario será Inicio.*/}
          {activo ? 'Pausa' : 'Inicio'}
          </button>
          <button className="button" onClick={reset}>
            Reset
          </button>
        </div>
        <button className="button" onClick={cambioTipo}>
            {tipo}
        </button>
        {tipo === 'Cuenta Regresiva' && <input type="number" ref={myRef} onChange={agregaSegundos} placeholder="Ingresa Segundos" autoComplete="off"/>}
      </div>
    );
};

export default Timer;
