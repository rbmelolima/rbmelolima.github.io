import React from 'react';
import './styles.css';

import Header from '../../components/Header';
import Apresentation from '../../components/Apresentation';
import Projects from '../../components/Projects';

export default function Home() {
  return (
    <main id="page-home">
      <Header />
      <Apresentation />
      <Projects />
    </main>
  );
}
