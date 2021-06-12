import React from 'react';
import { withRouter } from 'react-router-dom';
import { useStore } from '../store';

const Top5 = ({ showTop5, hideTop5, onSeeAll, className, history }) => {
  const { repos, updateContext } = useStore();

  const onClick = (repo) => {
    hideTop5();
    updateContext({ type: 'SET_SELECTED_REPO', repo });
    history.push(`/details?id=${repo.id}`);
  }

  console.log('Top5 repos', repos);
  console.log('Top5 showTop5', showTop5);

  if (repos.length === 0 || !showTop5) return null

  return (
    <div className={`column results white-bg ${className}`}>
      {
        repos.slice(0,5).map((repo, indx) => (
          <button className="result" key={`${repo.name}-${indx}`} onClick={() => onClick(repo)}>
            {repo.name}
          </button>
        ))
      }
      <hr/>
      <button className="result" onClick={onSeeAll}>See All</button>
    </div>
  )
};

export default withRouter(Top5);