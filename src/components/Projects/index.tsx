import React, { useState, useEffect } from 'react';
import { IRepo } from '../../models/IRepos';
import githubAPI from '../../services/githubAPI';
import CardProject from './CardProject';
import './styles.css';

export default function Projects() {
  const [ repos, setrepos ] = useState<Array<IRepo>>();

  useEffect(() => {
    async function getData() {
      try {
        const response = await githubAPI.get<Array<IRepo>>('users/rbmelolima/repos?per_page=100');
        const { data } = response;
        setrepos(data);

      } catch(error) {
        //Tratar o erro
      }
    }
    getData();
  }, []);

  return (
    <section id="projects">
      <h2>Projetos</h2>

      <div className="list-projects">
        {
          repos !== undefined && (
            repos.map(repo => {
              return (
                <CardProject data={ repo } key={ repo.id } />
              );
            })
          )
        }
      </div>
    </section>
  );
}