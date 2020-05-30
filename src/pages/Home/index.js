import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'


import './styles.css'

import Header from '../../components/Header';
import computer from '../../assets/icons/computer.svg'



export default function Home() {
  return (
    <>
      <Header></Header>
      <main className="home">
        <div className="apresentation-container">
          <div className="apresentation">
            <h1>Olá, sou Roger Bernardo de Melo Lima</h1>
            <p>Analista de sistemas, técnico de informática e desenvolvedor fullstack, trabalhando com javascript e flutter no dia a dia</p>

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
          </div>
        </div>

        <div className="img-container">
          <img src={computer} alt="Developer" className="developer-img"></img>
        </div>
      </main>
    </>
  );
} 
