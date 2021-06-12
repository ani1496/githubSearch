import React, { useState } from 'react';
import { useStore } from '../store';
// import logo from '../../images/logo.svg';
import { searchGitHubRepos } from '../utils/methods'
import Top5 from './Top5';

const SearchBar = ({ onSeeAll, className }) => {
  const { searchInput, updateContext, error } = useStore();
  const [showTop5, setShowTop5] = useState(false);

  const onInputChange = (input) => {
    if ( input === '') {
      setShowTop5(false);
      return  updateContext({ type: 'CLEAR_REPOS' });
    }

    return fetchData(input);
  }

  const fetchData = async (input) =>  {
    updateContext({ type: 'LOADING_REPOS', input })  // change to LOAD_REPOS

    try {
      const { data, error: resError } = await searchGitHubRepos(input);
      setShowTop5(data.length > 0);
    
      if(resError && data.length === 0) {
        return updateContext({ type: 'ERROR_REPOS' });
      }

      return updateContext({ type: 'GET_REPOS', data });
    }
    catch { return updateContext({ type: 'ERROR_REPOS' }) }
  }

  return (
    <div>
      <input className={`search-bar ${className?.searchBar}`} onChange={({target}) => { onInputChange(target.value) }} value={searchInput}/>
      { searchInput?.length !== 0 && error && <p className="flex align-center marg-1">No repositories have been found. Please try again.</p> }
      <Top5 showTop5={showTop5} hideTop5={() => setShowTop5(false)} onSeeAll={() => { setShowTop5(false); onSeeAll(); }} className={className?.top5}/> 
    </div>
  )
};

export default SearchBar;