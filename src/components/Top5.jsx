import React from 'react';
import { useStore } from './store';
import '../styles/index.css';

const Top5 = ({ hide, setShowAll }) => {
  const { repos } = useStore();

  if(repos.length === 0 || hide ) return null

  return (
    <div className="column results">
      {repos.slice(0,5).map((repo, indx) => {
        const {name} = repo;
        return <button className="result" key={`${name}-${indx}`}>{name}</button>
      })}
        <hr/>
        <button className="result" onClick={setShowAll}>See All</button>
    </div>
  )
};

export default Top5;