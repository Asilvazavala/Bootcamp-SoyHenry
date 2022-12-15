import React from 'react';
import styles from './styles/Card.module.css';

export default function Card({ min, max, name, img, onClose, id }) {
  // acá va tu código
  return (
    <div 
    className={styles.contendedorCard}>

      <button 
        className={styles.btnCerrarVentana} 
        onClick={onClose}
        >X
      </button>

      <h4>
        {name}
      </h4>

      <p
        className={styles.valoresTemp}>
        Min 
        &nbsp; &nbsp; &nbsp; 
        Max 
      

        <p>
          {min}° 
          &nbsp; &nbsp; &nbsp; &nbsp;  
          {max}° 
      
      
          <img 
            className={styles.imagenClima}
            src={`http://openweathermap.org/img/wn/${img}@2x.png`} 
            alt='img not found' />
        </p>
      </p>
    </div>
  )
};