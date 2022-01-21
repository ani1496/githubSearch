import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useStore } from '../store';
import { searchGitHubRepos } from '../utils/methods';
import { useDebounce } from '../utils/hooks';
import Top5 from './Top5';

const SearchBar = ({ showSearches, className }) => {
  const { updateContext, searchVal } = useStore();
  const [hideTop5, setHideTop5] = useState(true);
  const [searchInput, setSearchInput] = useState(searchVal);

  const debouncedSearchInput = useDebounce(searchInput, 400);

  const fetchData = async (input) => {
    updateContext({ type: 'LOADING_REPOS', searchVal: input })

    try {
      const { data, error: resError } = await searchGitHubRepos(input);
      if (showSearches) setHideTop5(data.length === 0);

      if (!resError && data.length === 0) {
        return updateContext({ type: 'NO_REPOS' });
      }

      if (resError && data.length === 0) {
        return updateContext({ type: 'ERROR_REPOS' });
      }

      return updateContext({ type: 'GET_REPOS', data });
    }
    catch { return updateContext({ type: 'ERROR_REPOS' }) }
  };

  const prevInput = useRef(searchInput);
  useEffect(() => {
    if (prevInput.current === searchInput) return; // don't search if the input value is the same as prev page.

    if (debouncedSearchInput) return fetchData(debouncedSearchInput);

    if (debouncedSearchInput === '') {
      setHideTop5(true);
      return updateContext({ type: 'CLEAR_REPOS' })
    };
  },
    // fetchData is not a dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [debouncedSearchInput]
  );

  return (
    <div>
      <input
        className={`search-bar ${className}`}
        type="text"
        onChange={({ target }) => setSearchInput(target.value)}
        value={searchInput}
      />
      {showSearches &&
        <Top5 hide={hideTop5} setHideTop5={setHideTop5} />
      }
    </div>
  )
};

SearchBar.propTypes = {
  showSearches: PropTypes.bool.isRequired,
  className: PropTypes.string,
}

SearchBar.defaultProps = {
  className: '',
}

export default SearchBar;