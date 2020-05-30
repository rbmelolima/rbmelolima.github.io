import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import './styles.css'

export default function Footer() {
  return (
    <footer>
      <div className="icons-group">
        <a href="https://github.com/rbmelolima" target="blank">
          <FaGithub size="24" color="212121"></FaGithub>
        </a>

        <a href="https://www.linkedin.com/in/rbmelolima/" target="blank">
          <FaLinkedin size="24" color="0e76a8"></FaLinkedin>
        </a>

        <a href="mailto:rbmelolima@gmail.com" target="blank">
          <FcGoogle size="24"></FcGoogle>
        </a>
      </div>
    </footer>
  )
}