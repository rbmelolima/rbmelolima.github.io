import React, { useState, useEffect } from 'react';
import { IRepo } from '../../entity/github';
import CardProject from './CardProject';
import { githubController } from '../../entity/github';
import { ErrorBoundary } from '../ErrorBoundary';
import './styles.css';

export default function Projects () {
  const [ repos, setrepos ] = useState<Array<IRepo>>();
  const [ error, setError ] = useState<boolean>(false);

  async function handleProjects () {
    try {
      const listProjects = await githubController.getRepositories();
      setrepos(listProjects);
    } catch (error) {
      setError(true);
    }
  }

  useEffect(() => {
    handleProjects();
  }, []);

  return (
    <ErrorBoundary error={ error }>
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
    </ErrorBoundary>
  );
}