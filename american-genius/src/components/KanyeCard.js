import React, {Component} from 'react';

function KanyeCard(props) {
  return (
    <div className="modal">
      <h1>{props.kanye.quote}</h1>
      <h3>in</h3>
      <h1>{props.weather.data.name}</h1>
      <h3>(Feels like: {props.weather.data.main.feels_like})</h3>
    </div>
  )
}

export default KanyeCard
