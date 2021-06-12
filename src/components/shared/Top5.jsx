import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStore } from '../store';

const Top5 = ({ showTop5, hideTop5, onSeeAll, className }) => {
  const { repos, updateContext } = useStore();

  const onClick = (repo) => {
    hideTop5();
    updateContext({ type: 'SET_SELECTED_REPO', repo })
  }

  if (repos.length === 0 || !showTop5) return null

  return (
    <div className={`column results white-bg ${className}`}>
      {repos.slice(0,5).map((repo, indx) => {
        const { name, id } = repo;
        
        return (
          <button className="result" key={`${name}-${indx}`} onClick={() => onClick(repo)}>
            <NavLink to={`/details?id=${id}`} style={{ all: 'unset'}}>{name}</NavLink>
          </button>
        )
      })}
        <hr/>
        <button className="result" onClick={onSeeAll}>See All</button>
    </div>
  )
};

export default Top5;