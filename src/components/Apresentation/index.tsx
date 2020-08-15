import React, { useEffect, useState } from 'react';
import IUser from '../../models/IUser';
import githubAPI from '../../services/githubAPI';
import { FaGithub, FaLinkedin, FaMediumM, FaGoogle, FaWhatsapp } from 'react-icons/fa';
import './styles.css';

export default function Apresentation(): JSX.Element {
  const [ user, setuser ] = useState<IUser>();

  useEffect(() => {
    async function getData() {
      try {
        const response = await githubAPI.get<IUser>('users/rbmelolima');
        const { data } = response;
        setuser(data);

      } catch(error) {
        //Tratar o erro
      }
    }
    getData();
  }, []);


  return (
    <section id="apresentation">
      <div className="content">
        <img src={ user?.avatar_url } alt="Foto - Roger Bernardo de Melo Lima" />

        <h1>Roger Bernardo de Melo Lima</h1>
        <p>{ user?.location }</p>
        <p>{ `@${ user?.login }` }</p>

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

        <p>{ user?.bio }</p>
      </div>
    </section>
  );
}