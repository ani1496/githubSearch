import React from 'react';

const Error = ({ className = "" }) => (
  <div className={`flex align-center ${className}`}>
    <p>An Error has occurred. Please try again.</p>
  </div>
);

export default Error;