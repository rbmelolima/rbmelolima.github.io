import React from 'react';
import { FaGithub, FaCode, FaLink } from 'react-icons/fa';
import { IRepo } from '../../../entity/github';
import './styles.css';
interface CardProjectProps {
  data: IRepo;
}

export default function CardProject (props: CardProjectProps) {
  const { description, homepage, html_url, language, name } = props.data;

  function renderHomepageLink () {
    if (homepage !== '' && homepage !== null) {
      return (
        <a href={ homepage } target="_blank" rel="noopener noreferrer">
          <FaLink size={ 24 } />
        </a>
      );
    }

    else {
      return <></>;
    }
  }

  return (
    <article className="card-project">
      <h4>{ name }</h4>
      <p>{ description }</p>

      <div className="more-info">
        <a href={ html_url } target="_blank" rel="noopener noreferrer">
          <FaGithub size={ 24 } />
        </a>

        {
          renderHomepageLink()
        }

        <span>
          <FaCode size={ 24 } />
          { language }
        </span>
      </div>
    </article >
  );
}