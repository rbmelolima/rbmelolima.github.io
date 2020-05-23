import React from 'react'
import Header from '../../components/Header';

import { FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa'

import './styles.css'
import developer from '../../assets/icons/developer.svg'

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <div className="apresentation">
          <h1>Olá, sou Roger Bernardo de Melo Lima</h1>
          <p>Analista de sistemas, técnico de informática e desenvolvedor fullstack</p>

          <div className="icons-group">
            <FaGithub size="24" color="0f4c81"></FaGithub>
            <FaLinkedin size="24" color="0f4c81"></FaLinkedin>
            <FaGoogle size="24" color="0f4c81"></FaGoogle>
          </div>
        </div>

        <div className="img-container">
          <img src={developer} alt="Developer" className="developer-img"></img>
        </div>
      </main>
    </>
  );
} 