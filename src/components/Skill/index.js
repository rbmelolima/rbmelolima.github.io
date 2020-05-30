import React from 'react'

import './styles.css'

export default function Skill(props) {
  return (
    <div className="skill">
      <div className="skill-content">
        <img src={props.img} alt={props.legend} />
        <h4>{props.legend}</h4>
      </div>
    </div>
  )
}