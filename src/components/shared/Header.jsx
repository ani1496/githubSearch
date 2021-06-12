import React from 'react';
import { withRouter } from 'react-router-dom';
import { useStore } from '../store';
import SearchBar from './SearchBar';
import logo from '../../images/logo.svg';

const Header = ({ history }) => {
  const {  updateContext } = useStore()

  const onSeeAll = () => {
    updateContext({ type: 'SET_SHOW_ALL_REPOS', showAllRepos: true });
    history.push('/');
  }

  return (
    <div className="header row black-bg space-between">
      <img src={logo} alt="logo" className="github-logo pad-2-r to-white"/>
      <SearchBar 
        onSeeAll={onSeeAll}
        className={{
          searchBar: "header-searchbar",
          top5: "fixed"
        }}
      />
    </div>
  );
};

export default withRouter(Header);