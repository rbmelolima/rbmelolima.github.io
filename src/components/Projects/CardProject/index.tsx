import React from 'react';
import { IRepo } from '../../../models/IRepos';
import { FaGithub, FaCode, FaLink } from 'react-icons/fa';
import './styles.css';

interface CardProjectProps {
  data: IRepo;
}

export default function CardProject(props: CardProjectProps) {
  const { description, homepage, html_url, language, name } = props.data;

  return (
    <article className="card-project">
      <h4>{ name }</h4>
      <p>{ description }</p>

      <div className="more-info">
        <a href={ html_url } target="_blank" rel="noopener noreferrer">
          <FaGithub size={ 24 } />
        </a>

        {
          homepage !== ''
            ? (
              <a href={ homepage } target="_blank" rel="noopener noreferrer">
                <FaLink size={ 24 } />
              </a>
            )
            : <></>
        }

        <span>
          <FaCode size={ 24 } />
          { language }
        </span>
      </div>
    </article>
  );
}