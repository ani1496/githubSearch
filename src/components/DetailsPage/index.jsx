import React from 'react';
import { useStore } from '../store';
// import queryString from 'query-string'
import { Redirect } from 'react-router-dom';
import Header from '../shared/Header';
import RepoDetails from './RepoDetails';

const DetailsPage = () => {
  const { selectedRepo } = useStore();

  // Read ID and fetch repo using git api
  // const { id: repoId } = queryString.parse(window.location.search);
  // const repo = repos.find( repo => repo.id === parseInt(repoId) )
  
  if(!selectedRepo || selectedRepo.length === 0) return <Redirect to="/"/> 

  return (
    <div>
      <Header />
      <RepoDetails repo={selectedRepo} />
    </div>
  )
};

export default DetailsPage;