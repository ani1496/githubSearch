import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useStore } from '../store';
import Loader from './Loader';
import Error from './Error';

const Top5 = ({ history, hide, setHideTop5 }) => {
  const { loading, error, initRepos, updateContext } = useStore();

  const onRepoClick = (repo) => {
    setHideTop5(true);
    updateContext({ type: 'SET_SELECTED_REPO', repo });
    history.push(`/details?id=${repo.id}`);
  }

  const onSeeAllClick = () => {
    history.push('/');
  }

  if (loading) return (
    <div className="column results white-bg fixed pad-1">
      <Loader className="loader-sm" />
    </div>
  )

  if (error) return (
    <div className="column results white-bg fixed pad-1">
      <Error />
    </div>
  )

  if (hide) return null;

  return (
    <div className="column results white-bg fixed">
      {
        initRepos.slice(0,5).map((repo, indx) => (
          <button className="result" key={`${repo.name}-${indx}`} onClick={() => onRepoClick(repo)}>
            {repo.name}
          </button>
        ))
      }
      <hr/>
      <button className="result" onClick={onSeeAllClick}>See All</button>
    </div>
  )
};

Top5.propTypes = {
  history: PropTypes.object.isRequired,
  hide: PropTypes.bool.isRequired,
  setHideTop5: PropTypes.func.isRequired,
}

export default withRouter(Top5);