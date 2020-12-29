import React, { useEffect, useState } from 'react';
import { IUser } from '../../entity/github/interfaces/IUser';
import { FaGithub, FaLinkedin, FaMediumM, FaGoogle, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { githubController } from '../../entity/github';
import { ErrorBoundary } from '../ErrorBoundary';
import { CardSocialMedia } from './CardSocialMedia';
import { GroupCardSocialMedia } from './GroupCardSocialMedia';

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
        { <ErrorBoundary error={ error }>
          <img
            src={ user?.avatar_url }
            alt="Foto - Roger Bernardo de Melo Lima"
          />
        </ErrorBoundary>
        }
        <h1>Roger Bernardo de Melo Lima</h1>

        { <ErrorBoundary error={ error }>
          <p>{ user?.location }</p>
          <p>{ `@${user?.login}` }</p>
        </ErrorBoundary> }

        <div className="contato">
          <GroupCardSocialMedia>
            <CardSocialMedia url="https://github.com/rbmelolima">
              <div>
                <FaGithub size="24" />
                <span>Github</span>
              </div>
            </CardSocialMedia>

            <CardSocialMedia url="https://www.linkedin.com/in/rbmelolima/">
              <div>
                <FaLinkedin size="24" />
                <span>Linkedin</span>
              </div>
            </CardSocialMedia>

            <CardSocialMedia url="mailto:rbmelolima@gmail.com">
              <div>
                <FaGoogle size="24" />
                <span>Gmail</span>
              </div>
            </CardSocialMedia>

            <CardSocialMedia url="https://medium.com/@rbmelolima">
              <div>
                <FaMediumM size="24" />
                <span>Medium</span>
              </div>
            </CardSocialMedia>

            <CardSocialMedia url="https://api.whatsapp.com/send?phone=5513988282873">
              <div>
                <FaWhatsapp size="24" />
                <span>Whatsapp</span>
              </div>
            </CardSocialMedia>
            <CardSocialMedia url="https://www.instagram.com/rbmelolima/">
              <div>
                <FaInstagram size="24" />
                <span>Instagram</span>
              </div>
            </CardSocialMedia>
          </GroupCardSocialMedia>

        </div>
      </div>
    </section>
  );
}