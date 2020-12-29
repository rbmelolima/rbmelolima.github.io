import githubAPI from '../services/githubAPI';
import { IRepo } from '../models/IRepos';
import { IUser } from '../models/IUser';

class GithubController {
  async getRepositories ({ username = 'rbmelolima' }): Promise<IRepo[]> {
    try {
      const response = await githubAPI.get<Array<IRepo>>(`users/${username}/repos?per_page=100`);
      const { data } = response;
      return data;
    }
    catch (error) {
      throw new Error('Erro ao buscar os repositórios');
    }
  }

  async profile ({ username = 'rbmelolima' }) {
    try {
      const response = await githubAPI.get<IUser>(`users/${username}`);
      const { data } = response;
      return data;

    } catch (error) {
      throw new Error('Erro ao buscar os dados do perfil');
    }
  }
}

const githubController = new GithubController();

export { githubController }