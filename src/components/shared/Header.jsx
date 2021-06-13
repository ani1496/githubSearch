import React from 'react';
import SearchBar from './SearchBar';
import logo from '../../images/logo.svg';

const Header = () => (
  <div className="header row black-bg space-between">
    <img src={logo} alt="logo" className="github-logo pad-2-r to-white"/>
    <SearchBar 
      showSearches={true}
      className="header-searchbar"
    />
  </div>
);

export default Header;