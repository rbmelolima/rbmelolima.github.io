import React from 'react'

import './styles.css'

export default function Project(props) {
  return (
    <a href={props.url} target="blank">
      <div className="project">
        <h3>{props.title}</h3>
        <p>
          {props.description}
        </p>      
      </div>
    </a>
  );
}