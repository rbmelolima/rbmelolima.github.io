import React from 'react'

import './styles.css'

export default function Experience(props) {
  return (
    <div className="experience">
      <div className="img-container">
        <img src={props.img} alt={props.alt} />
      </div>
      <div className="details-container">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <p>{props.data}</p>
      </div>
    </div>
  )
}