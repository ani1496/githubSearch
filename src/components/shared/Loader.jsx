import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ className = "" }) => (
  <div>
    <div className={`loader ${className}`}/>
  </div>
);

Loader.propTypes = {
  className: PropTypes.string,
}

Loader.defaultProps = {
  className: '',
}

export default Loader;
