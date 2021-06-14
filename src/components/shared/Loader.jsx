import React from 'react';

const Loader = ({ className = "" }) => (
  <div>
    <div className={`loader ${className}`}/>
  </div>
);

export default Loader;
