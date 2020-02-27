import React, {Component} from 'react';

function TrumpCard(props) {
  return (
    <div className="modal">
      <h1>{props.trump.value}</h1>
    </div>
  )
}

export default TrumpCard
