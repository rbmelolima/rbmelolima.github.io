import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

import { FaBars } from 'react-icons/fa'


export default function Header() {
  return (
    <header>
      <nav>
        <div className="menu-logo">
          <Link to='/' className="menu-link">rbmelolima</Link>
        </div>

        <div className="menu-group-links">
          <Link to='/' className="menu-link">Início</Link>
          <Link to='/about' className="menu-link">Sobre</Link>
          <Link to='/projects' className="menu-link">Projetos</Link>
        </div>

        <div className="menu-button">
          <FaBars size="24"></FaBars>
        </div>

      </nav>
    </header>
  )
}