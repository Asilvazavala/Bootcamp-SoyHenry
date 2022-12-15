import React from 'react';
import Card from './Card.jsx';
import styles from './styles/Cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={styles.container}>
      {
        props.cities && props.cities.map(cities => (
          <Card
            key={cities.id}
            max={cities.main.temp_max}
            min={cities.main.temp_min} 
            name={cities.name}
            img={cities.weather[0].icon}
            onClose={() => alert(cities.name)}
          />
        ))
      }
    </div>
  )
};