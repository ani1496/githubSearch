import React, { useState } from 'react';
import { useStore } from './store';
import SearchBar from './SearchBar';
import Top5 from './Top5';
import ShowAll from './ShowAll';
import SortOptions from './SortOptions';
import Filter from './Filter';
import '../styles/index.css';

const LandingPage = () => {
  const { initRepos } = useStore();

  const [showAll, setShowAll] = useState(false);

  return (
    <div className="container">
      <SearchBar />
      <Top5 hide={showAll} setShowAll={() => setShowAll(true)}/>
      {showAll && initRepos.length > 0 && (
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