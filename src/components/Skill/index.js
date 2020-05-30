import React from 'react'

import './styles.css'

export default function Skill(props) {
  return (
    <div className="skill">
      <img src={props.img} alt={props.alt}/>
    </div>
  )
}