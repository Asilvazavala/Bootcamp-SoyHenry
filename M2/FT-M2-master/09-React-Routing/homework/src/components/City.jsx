import React from 'react'

export const City = ({ city }) => {
  if(!city) {
    alert('la ciudad no existe');
    return<div>La ciudad no existe</div>
  }

  return (
    <div className='ciudad'>
      <div className='container'>
        <h2>{city.name}</h2>   
        <div className='info'>
          <div>Temperatura: {city.temp}°C</div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind}km/h</div>
          <div>Cantidad de nubes: {city.clouds}</div>
          <div>Latitud: {city.latitud}°</div>
          <div>Longitud: {city.longitud}°</div>
        </div> 
      </div>
    </div>
  )
}
