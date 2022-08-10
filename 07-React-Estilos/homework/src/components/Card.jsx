import React from 'react';

export default function Card(props) {
  // acá va tu código
  return <div>
    <div>
      <button onClick={props.onClose}>x</button>
      <h3>{props.name}</h3>
    </div>
    <div>
      <div>
      <h4>Min</h4>
      <h4>{props.min}</h4>
      </div>
      <div>
      <h4>Max</h4>
      <h4>{props.max}</h4>
      </div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt= "Ciudad" />
    </div>
  </div>
};