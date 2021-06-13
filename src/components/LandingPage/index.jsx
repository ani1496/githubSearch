import React from 'react';
import { useStore } from '../store';
import SearchBar from '../shared/SearchBar';
import ShowAll from './ShowAll';
import SortOptions from './SortOptions';
import Filter from './Filter';
import logo from '../../images/logo.svg';

const LandingPage = () => {
  const { initRepos } = useStore();
  
  console.log('LandingPage', initRepos);

  return (
    <div className="container">
       <>
        <div className={`row align-center align-items-center`}>
          <img src={logo} alt="logo" className="github-logo pad-2-r"/>
          <h1>GitHub Search</h1>
        </div>
        <SearchBar showSearches={false}/>
      </>
      {initRepos.length > 0 && (
        <>  
        <div className="row space-between">
          <SortOptions />
          <Filter />
        </div>
          <hr/>
          <ShowAll />
        </>
      )}
    </div>
  );
};


export default LandingPage;