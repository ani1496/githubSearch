import React from 'react';
import { useStore } from '../store';
import { filterRepos } from '../utils/methods';

const Filter = () => {
  const { initRepos, updateContext } = useStore();

  const onFilterValChange = (val) => {
    if (val === '') return updateContext({ type: 'CLEAR_FILTER' })

    const filteredRepos = filterRepos(initRepos, val);
    updateContext({ type: 'FILTERED_REPOS', data: filteredRepos })
  };

  return(
    <div className="marg-2-t row">
      <p className="pad-1-r">Filter Language:</p>
      <input className="filter-input" onChange={(e) => onFilterValChange(e.target.value)}/>
    </div>
  );
}

export default Filter;
