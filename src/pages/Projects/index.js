import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProjectComponent from '../../components/Project'

import './styles.css'

export default function Projects() {
  return (
    <>
      <Header></Header>
      <main className="projects-main">
        <h1>Projetos</h1>

        <section className="projects-container">
          <ProjectComponent
            url={'https://github.com/rbmelolima/Bin2Dec'}
            title={'Bin2Dec'}
            description={'Conversor e calculadora de bases numéricas quaisquer.'}
            tech1={'Javascript'}
            tech2={'Sass'}
          >
          </ProjectComponent>

          <ProjectComponent
            url={'https://github.com/rbmelolima/Vacinnus'}
            title={'Vacinnus'}
            description={'Vaccinus é uma aplicação web que procura deixar mais prático e seguro o controle das vacinas tomadas por um indivíduo, através de uma caderneta online, que pode ser ser acessada por qualquer dispositivo online conectado à internet.'}
            tech1={'PHP'}
            tech2={'MySQL'}
          >
          </ProjectComponent>

          <ProjectComponent
            url={'https://github.com/rbmelolima/Be_the_hero'}
            title={'Be the hero'}
            description={'O objetivo do Be the Hero é conectar pessoas que querem ajudar com ONGS que querem ser ajudadas. Para tanto, as ongs lançam os casos que precisam ser ajudados por outras pessoas no web e o aplicativo mobile consome esses dados, conectando as pessoas às ONGS.'}
            tech1={'React'}
            tech2={'Node'}
          >
          </ProjectComponent>

          <ProjectComponent
            url={'https://github.com/rbmelolima/Cactus'}
            title={'Cactus'}
            description={'Bloco de notas online inspirado no Google Keep feito em PHP e MySQL.'}
            tech1={'PHP'}
            tech2={'MySQL'}
          >
          </ProjectComponent>

          <ProjectComponent
            url={'https://github.com/rbmelolima/Ninesun'}
            title={'Ninesun'}
            description={'Site de turismo feito para a Baixada Santista. Nesse site um possível curioso iria conhecer os principais pontos turísticos da região.'}
            tech1={'HTML'}
            tech2={'CSS'}
          >
          </ProjectComponent>

          <ProjectComponent
            url={'https://github.com/rbmelolima/Jogo_da_velha'}
            title={'Tic Tac Toe'}
            description={'Jogo da velha utilizando javascript. Pode ser jogado com 2 jogadores locais ou sozinho contra o computador.'}
            tech1={'Javascript'}
            tech2={'Sass'}
          >
          </ProjectComponent>

          <ProjectComponent
            url={'https://github.com/rbmelolima/Orbit'}
            title={'Orbit'}
            description={'Orbit é um aplicativo mobile feito em Flutter para fornecer, todos os dias, imagens diferentes sobre o universo. Para tanto, usa-se a API da NASA chamada Astronomy Picture of the Day (APOD).'}
            tech1={'Flutter'}
            tech2={'Dart'}
          >
          </ProjectComponent>
          <ProjectComponent
            url={'https://github.com/rbmelolima/unPass'}
            title={'unPass'}
            description={'O unPass foi criado com a intenção de gerar senhas aleatórias para que o usuário utilize em suas aplicações. O seu diferencial é criar senhas também fáceis de serem lembradas por seres humanos, afinal "enguia845Jambo" é uma senha extremamente forte e facilmente lembrável.'}
            tech1={'Javascript'}
            tech2={'Sass'}
          >
          </ProjectComponent>
          <ProjectComponent
            url={'https://github.com/rbmelolima/OBI'}
            title={'OBI'}
            description={'Exercícios resolvidos da Olimpíada Brasileira de Informática.'}
            tech1={'C#'}
            tech2={'Java'}
          >
          </ProjectComponent>
          <ProjectComponent
            url={'https://github.com/rbmelolima/Dev_radar'}
            title={'Dev Radar'}
            description={'Uma maneira de encontrar devs próximos de você.'}
            tech1={'React'}
            tech2={'Node'}
          >
          </ProjectComponent>
          <ProjectComponent
            url={'https://github.com/rbmelolima/EPICI'}
            title={'EPICI'}
            description={'O site do EPICI foi feito para que os pesquisadores, alunos e professores pudessem acompanhar o evento que iria ocorrer na Semana Nacional de Ciência e Tecnologia (SNCT).'}
            tech1={'PHP'}
            tech2={'MySQL'}
          >
          </ProjectComponent>

        </section>

      </main>
      <Footer></Footer>
    </>
  );
}