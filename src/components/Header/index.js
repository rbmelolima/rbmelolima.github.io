import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function Header() {
  return (
    <header>
      <nav>
        <div className="menu-logo">
          <Link to='/' className="menu-link">rbmelolima</Link>
        </div>

        <div className="menu-group-links">
          <Link to='/about' className="menu-link">Sobre</Link>
          <Link to='/projects' className="menu-link">Projetos</Link>
        </div>      

      </nav>
    </header>
  )
}