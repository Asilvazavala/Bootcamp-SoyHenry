import React, { useState } from 'react';
import './App.css';
import {Nav} from './components/Nav';
import Cards from './components/Cards'

export default function App() {

  const [cities, SetCities] = useState([]);
  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(json => {
        
        if(json.main !== undefined) {
          const city = {
            min: Math.round(json.main.temp_min),
            max: Math.round(json.main.temp_max),
            id: json.id,
            img: json.weather[0].icon,
            wind: json.wind.speed,
            temp: json.main.temp,
            name: json.name,
            longitude: json.coord.long,
            latitude: json.coord.lon
          }
          SetCities(oldCities => [...oldCities, city]);
        }else{
          alert('ciudad no encontrada');
        }
      })
      .catch(err => console.log(err));
  }

  function onClose (id){
    SetCities(oldCities => oldCities.filter(cities => cities.id !== id));
  }

  return (
    <div className="App">
      
      <Nav 
        onSearch={onSearch} 
      />

      <Cards 
        cities={cities}
        onClose={onClose} 
      />

    </div>
  );
}
