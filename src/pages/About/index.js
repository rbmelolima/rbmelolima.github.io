import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Skill from '../../components/Skill'
import Experience from '../../components/Experience'

import me from '../../assets/img/me.jpg'

import html from '../../assets/icons/html.svg'
import css from '../../assets/icons/css.svg'
import bootstrap from '../../assets/icons/bootstrap.svg'
import dart from '../../assets/icons/dart.svg'
import figma from '../../assets/icons/figma.svg'
import flutter from '../../assets/icons/flutter.svg'
import git from '../../assets/icons/git.svg'
import javascript from '../../assets/icons/javascript.svg'
import mysql from '../../assets/icons/mysql.svg'
import nodejs from '../../assets/icons/nodejs.svg'
import php from '../../assets/icons/php.svg'
import react from '../../assets/icons/react.svg'
import sass from '../../assets/icons/sass.svg'
import wordpress from '../../assets/icons/wordpress.svg'

import fatec from '../../assets/icons/fatec.svg'
import ifsp from '../../assets/icons/ifsp.svg'
import jtp from '../../assets/icons/jtp.svg'

import './styles.css'

export default function About() {
  return (
    <>
      <Header></Header>

      <main className="about-main">
        <section className="profile-container">
          <div className="profile">
            <img src={me} alt="Foto de perfil" className="profile-img" />
            <p>
              Entusiasta da tecnologia, curioso por descobrir novas ferramentas e como resolver problemas de maneira criativa. Caso queira ver meus projetos ou me contatar, deixo minhas redes sociais abaixo.
            </p>
            <div className="icons-group">
              <a href="https://github.com/rbmelolima" target="blank" title="Link para o github">
                <FaGithub size="24" color="212121"></FaGithub>
              </a>

              <a href="https://www.linkedin.com/in/rbmelolima/" target="blank" title="Link para o linkedin">
                <FaLinkedin size="24" color="0e76a8"></FaLinkedin>
              </a>

              <a href="mailto:rbmelolima@gmail.com" target="blank" title="Link para o email">
                <FcGoogle size="24" color="0f4c81"></FcGoogle>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=5513988282873&text=Vi%20seu%20site%20e%20gostaria%20de%20falar%20com%20voc%C3%AA%20%3A)"
                target="blank"
                title="Contato via whatsapp">
                <FaWhatsapp size="24" color="128C7E"></FaWhatsapp>
              </a>
            </div>
          </div>
        </section>

        <section className="skills-container">
          <h2>Tecnologias</h2>
          <p>Linguagens e ferramentas que uso ou já usei em trabalhos e projetos. </p>

          <div className="skills">
            <Skill img={html} legend={'HTML'}></Skill>
            <Skill img={css} legend={'CSS'}></Skill>
            <Skill img={javascript} legend={'Javascript'}></Skill>
            <Skill img={bootstrap} legend={'Bootstrap'}></Skill>
            <Skill img={sass} legend={'SASS'}></Skill>
            <Skill img={react} legend={'React.js'}></Skill>
            <Skill img={nodejs} legend={'Node.js'}></Skill>
            <Skill img={php} legend={'PHP'}></Skill>
            <Skill img={wordpress} legend={'Wordpress'}></Skill>
            <Skill img={flutter} legend={'Flutter'}></Skill>
            <Skill img={dart} legend={'Dart'}></Skill>
            <Skill img={mysql} legend={'MySql'}></Skill>
            <Skill img={git} legend={'Git'}></Skill>
            <Skill img={figma} legend={'Figma'}></Skill>
          </div>
        </section>

        <section className="xp">
          <h2>Experiência</h2>
          <Experience
            img={jtp}
            alt={'Logo da empresa JTP Solution'}
            title={'Desenvolvedor Front End'}
            description={'Na JTP pude trabalhar com diversas tecnologias e projetos. Assim que entrei fui designado para realizar uma manutenção em um site de automóveis, sendo este escrito em PHP. Em um segundo momento, construí um site em wordpress para uma vinícula em Portugal. Atualmente estou construíndo o front end de um aplicativo em flutter que tem como objetivo aproximar profissionais de beleza de seus clientes, ao estilo do ifood.'}
            data={'maio/2020 - presente'}
          >
          </Experience>
        </section>

        <section className="xp">
          <h2>Formação acadêmica</h2>
          <Experience
            img={fatec}
            alt={'Logo da FATEC Rubens Lara'}
            title={'Análise e desenvolvimento de sistemas'}
            description={'O Tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação. Esse profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção de projetos, preocupação com a qualidade, usabilidade, robustez, integridade e segurança de programas computacionais são fundamentais à atuação desse profissional.'}
            data={'janeiro/2020 - presente'}
          >
          </Experience>

          <Experience
            img={ifsp}
            alt={'Logo do IFSP Campus Cubatão'}
            title={'Técnico de informática'}
            description={'O técnico em informática é um profissional que tem entre suas responsabilidades a montagem, acabamento e manutenção de computadores, além da identificação e correção de problemas em aparelhos eletrônicos. Ele também instala e configura redes e softwares, trabalhando no desenvolvimento de sistemas e websites, o que o leva a atuar tanto em redes domésticas quanto empresariais (privadas e públicas).'}
            data={'janeiro/2016 - dezembro/2019'}
          >
          </Experience>
        </section>
      </main>

      <Footer></Footer>
    </>
  );
}
