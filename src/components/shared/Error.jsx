import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ className }) => (
  <div className={`flex align-center ${className}`}>
    <p>An Error has occurred. Please try again.</p>
  </div>
);

Error.propTypes = {
  className: PropTypes.string,
}

Error.defaultProps = {
  className: '',
}

export default Error;
