import React from 'react'
import { FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa'

import './styles.css'

export default function Footer() {
  return (
    <footer>
      <div className="icons-group">
        <a href="https://github.com/rbmelolima" target="blank">
          <FaGithub size="24" color="0f4c81"></FaGithub>
        </a>

        <a href="https://www.linkedin.com/in/rbmelolima/" target="blank">
          <FaLinkedin size="24" color="0f4c81"></FaLinkedin>
        </a>

        <a href="mailto:rbmelolima@gmail.com" target="blank">
          <FaGoogle size="24" color="0f4c81"></FaGoogle>
        </a>
      </div>
    </footer>
  )
}