import React, { useState } from 'react';
import { useStore } from './store';
import logo from '../images/logo.svg';
import { searchGitHubRepos } from './utils/methods'
import '../styles/index.css';

const SearchBar = () => {
  const { updateContext, error } = useStore();
  const [searchVal, setSearchVal] = useState('');

  const fetchData = async (val) =>  {
    updateContext({type: 'CLEAR_REPOS'})
    setSearchVal(val);

    try {
      const { data, error: resError } = await searchGitHubRepos(val);
    
      if(resError && data.length === 0) {
        return updateContext({ type: 'ERROR_REPOS'});
      }

      return updateContext({ type: 'GET_REPOS', data});
    }
    catch { return updateContext({ type: 'ERROR_REPOS'}) }
  }

  return (
    <>
    <div className="row align-center align-items-center">
        <img src={logo} alt="logo" className="github-logo pad-2-r"/>
      <h1>GitHub Search</h1>
    </div>
      <input className="search-bar" onChange={({target}) => { fetchData(target.value) }} value={searchVal}/>
      { searchVal.length !== 0 && error && <p className="flex align-center marg-1">No repositories have been found. Please try again.</p> } 
    </>
  )
};

export default SearchBar;