import React from 'react';
import { useStore } from '../store';
import SearchBar from '../shared/SearchBar';
import ShowAll from './ShowAll';
import SortOptions from './SortOptions';
import Filter from './Filter';
import logo from '../../images/logo.svg';
import Loader from '../shared/Loader';
import Error from '../shared/Error';

const LandingPage = () => {
  const { initRepos, loading, error, noneFound } = useStore();

  let Data = null;

  if (loading) Data = <Loader className="marg-2-t" />;

  if (error) Data = <Error className="marg-2-t" />

  if (noneFound) Data = <p>There are no results found</p>

  if (initRepos.length > 0) Data = (
    <>
      <div className="row space-between sort-filter pad-1-b">
        <SortOptions />
        <Filter />
      </div>
      <hr />
      <ShowAll />
    </>
  );

  return (
    <div className="container">
      <>
        <div className={`row align-center align-items-center`}>
          <img src={logo} alt="logo" className="github-logo pad-2-r" />
          <h1>GitHub Search</h1>
        </div>
        <SearchBar showSearches={false} />
      </>
      {Data}
    </div>
  );
};


export default LandingPage;
