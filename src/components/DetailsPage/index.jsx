import React, { useEffect, useState } from 'react';
import { useStore } from '../store';
import queryString from 'query-string'
import Header from '../shared/Header';
import RepoDetails from './RepoDetails';
import { searchGitHubRepoByName } from '../utils/methods';

const DetailsPage = () => {
  const { selectedRepo, updateContext } = useStore();
  const [error, setError] = useState(false);

  const parameters = queryString.parse(window.location.search);

  useEffect(() => {
    const getRepo = async () => {
      const { data, error, status } = await searchGitHubRepoByName(parameters?.user, parameters?.repo);

      if (status === 200 && !error) updateContext({ type: 'SET_SELECTED_REPO', repo: data });

      else setError(true);
    }

    if (Object.keys(selectedRepo).length === 0) getRepo();
  }, []);

  if (Object.keys(selectedRepo).length === 0 || error) return <p>Nothing Found</p>

  return (
    <div>
      <Header />
      <RepoDetails repo={selectedRepo} />
    </div>
  )
};

export default DetailsPage;
