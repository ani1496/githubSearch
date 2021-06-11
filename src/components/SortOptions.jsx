import React, { Fragment, useState } from 'react';
import { useStore } from './store';
import { sortRepos } from './utils/methods';
import * as constants from './utils/constants';

const SortOptions = () => {
  const { initRepos, updateContext} = useStore();
  const [sort, setSort] =  useState('best_match')
  const [showOptions, setShowOptions] = useState(false);
  const options = ['best_match', 'stargazers_count', 'size', 'score', 'watchers'];

  const onSelectOption = (option) => {
    setSort(option);
    setShowOptions(false);

    const sortedRepos = option === 'best_match' ? initRepos : sortRepos(initRepos, option);
    updateContext({ type: 'SORTED_REPOS', data: sortedRepos })
  }

  const getOptions = () => {
    if(!showOptions) return null;
  
    return (
      <div className="column dropdown-options">
        {options.map(option => (
          <Fragment key={option}>
          <button onClick={() => onSelectOption(option)} className="pad-1-tb">
            {constants[option]}
          </button>
          </Fragment>
        ))}
      </div>
    )
  }

  return(
    <div className="col-4 marg-2-t">
      <button onClick={() => setShowOptions(!showOptions)}>
        Sort by: {constants[sort]}
      </button>
     {getOptions()}
    </div>
  )
}

export default SortOptions;