import React, { useEffect, useState } from 'react';
import { IUser } from '../../entity/github/interfaces/IUser';
import { FaGithub, FaLinkedin, FaMediumM, FaGoogle, FaWhatsapp } from 'react-icons/fa';
import { githubController } from '../../entity/github';
import { ErrorBoundary } from '../ErrorBoundary';

import './styles.css';

export default function Apresentation (): JSX.Element {
  const [ user, setuser ] = useState<IUser>();
  const [ error, setError ] = useState<boolean>(false);

  async function handleUser () {
    try {
      const newUser = await githubController.profile();
      setuser(newUser);
    } catch (error) {
      setError(true);
    }
  }

  useEffect(() => {
    handleUser();
  }, []);

  return (
    <section id="apresentation">
      <div className="content">
        <ErrorBoundary error={ error }>
          <img
            src={ user?.avatar_url }
            alt="Foto - Roger Bernardo de Melo Lima"
          />
        </ErrorBoundary>

        <h1>Roger Bernardo de Melo Lima</h1>

        <ErrorBoundary error={ error }>
          <p>{ user?.location }</p>
          <p>{ `@${user?.login}` }</p>
        </ErrorBoundary>

        <div className="contato icons-group">
          <a href="https://github.com/rbmelolima" target="blank" title="Visualizar Github">
            <FaGithub size="24" />
          </a>

          <a href="https://www.linkedin.com/in/rbmelolima/" target="blank" title="Visualizar Linkedin">
            <FaLinkedin size="24" />
          </a>

          <a href="mailto:rbmelolima@gmail.com" target="blank" title="Visualizar Email">
            <FaGoogle size="24" />
          </a>

          <a href="https://medium.com/@rbmelolima" target="blank" title="Visualizar Medium">
            <FaMediumM size="24" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5513988282873"
            target="blank"
            title="Contato via whatsapp">
            <FaWhatsapp size="24" />
          </a>
        </div>

        <ErrorBoundary error={ error }>
          <p>{ user?.bio }</p>
        </ErrorBoundary>
      </div>
    </section>
  );
}