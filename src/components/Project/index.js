import React from 'react'

import './styles.css'

export default function ProjectComponent(props) {
  return (
    <a href={props.url} target="blank">
      <div className="project">
        <h3>{props.title}</h3>
        <p>
          {props.description}
        </p>
        <div className="badges">
          <div className="tech">
            <p>{props.tech1}</p>
          </div>

          <div className="tech">
            <p>{props.tech2}</p>
          </div>
        </div>
      </div>
    </a>
  );
}