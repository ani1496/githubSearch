import React, { useState } from 'react';
import * as constants from './utils/constants';

const SortOptions = () => {
  const [sort, setSort] =  useState('best_match')
  const [showOptions, setShowOptions] = useState(false);
  const options = ['best_match', 'stargazers_count', 'size', 'score', 'watchers'];

  const onSelectOption = (option) => {
    setSort(option);
    setShowOptions(false);
  }

  const getOptions = () => {
    if(!showOptions) return null;
  
    return (
      <div className="column dropdown-options">
        {options.map(option => (
          <>
          <button key={option} onClick={() => onSelectOption(option)} className="pad-1-tb">
            {constants[option]}
          </button>
          </>
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