import React from 'react';
// { useState, useRef, useLayoutEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useStore } from '../store';

const Top5 = ({ history, hide, setHideTop5 }) => {
  const { initRepos, updateContext } = useStore();

  const onRepoClick = (repo) => {
    setHideTop5(true);
    updateContext({ type: 'SET_SELECTED_REPO', repo });
    history.push(`/details?id=${repo.id}`);
  }

  const onSeeAllClick = () => {
    history.push('/');
  }

  if (hide) return null

  return (
    <div className="column results white-bg fixed">
      {
        initRepos.slice(0,5).map((repo, indx) => (
          <button className="result" key={`${repo.name}-${indx}`} onClick={() => onRepoClick(repo)}>
            {repo.name}
          </button>
        ))
      }
      <hr/>
      <button className="result" onClick={onSeeAllClick}>See All</button>
    </div>
  )
};

export default withRouter(Top5);