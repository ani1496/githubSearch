import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchBar from './SearchBar';
import logo from '../../images/logo.svg';

const Header = ({ history }) => (
  <div className="header row black-bg space-between">
    <img src={logo} alt="logo" className="github-logo pad-2-r to-white" onClick={() => history.push('/')}/>
    <SearchBar 
      showSearches={true}
      className="header-searchbar"
    />
  </div>
);

export default withRouter(Header);