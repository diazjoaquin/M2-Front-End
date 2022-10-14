import React, {useState} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';

export default function App() {

  const [cities, setCities] = useState([]); // a useState siempre le paso por parametro el valor de inicialización.
  // Si uso hooks en el CP hay que llamar a React.useState.
  
  const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

  function onSearch(city){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(json => {
        if (json.main !== undefined){
          const city = {
            min: json.main.temp_min,
            max: json.main.temp_max,
            id: json.id,
            img: json.weather[0].icon,
            temp: json.main.temp,
            feels_like: json.main.feels_like,
            name: json.name,
            pressure: json.main.pressure,
            humidity: json.main.humidity,
          };
          setCities(oldCities => [...oldCities, city]);
        } else {
          alert('City not founded');
        }
      });
  }

  function onClose(id){
    setCities(oldCities => oldCities.filter(city => city.id !== id));
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/>      
    </div>
  );
}
