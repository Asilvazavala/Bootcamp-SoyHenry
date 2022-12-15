import React from 'react';
import Card from './Card.jsx';
import styles from './styles/Cards.module.css'

export default function Cards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div 
      className={styles.container}>
      {
        cities && cities.map(cities => (
          <Card
            id={cities.id}
            key={cities.id}
            max={cities.max}
            min={cities.min} 
            name={cities.name}
            img={cities.img}
            onClose={() => onClose(cities.id)}
          /> 
        ))
      }
    </div>
  )
};