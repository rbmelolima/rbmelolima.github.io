import React from 'react'
import { FaGithub, FaLinkedin, FaMediumM, FaWhatsapp } from 'react-icons/fa'
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
            <h1>Olá! <br />Sou Roger Bernardo de Melo Lima.</h1>
            <p>Analista de sistemas, técnico de informática e desenvolvedor fullstack, trabalhando com javascript e flutter no dia a dia.</p>

            <div className="icons-group">
              <a href="https://github.com/rbmelolima" target="blank" title="Visualizar Github">
                <FaGithub size="24" color="212121"></FaGithub>
              </a>

              <a href="https://www.linkedin.com/in/rbmelolima/" target="blank" title="Visualizar Linkedin">
                <FaLinkedin size="24" color="0e76a8"></FaLinkedin>
              </a>

              <a href="mailto:rbmelolima@gmail.com" target="blank" title="Visualizar Email">
                <FcGoogle size="24"></FcGoogle>
              </a>

              <a href="https://medium.com/@rbmelolima" target="blank" title="Visualizar Medium">
                <FaMediumM size="24"></FaMediumM>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=5513988282873&text=Vi%20seu%20site%20e%20gostaria%20de%20falar%20com%20voc%C3%AA%20%3A)"
                target="blank"
                title="Contato via whatsapp">
                <FaWhatsapp size="24" color="128C7E"></FaWhatsapp>
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
