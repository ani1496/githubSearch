import React from 'react';
// { useState } 

const Filter = () => {
  // const [filter, setFilter] =  useState('');

  const onFilterValChange = (val) => console.log(val);

  return(
    <div className="marg-2-t row">
      <p className="pad-1-r">Filter Language:</p>
      <input className="filter-input" onChange={(e) => onFilterValChange(e.target.value)}/>
    </div>
  );
}

export default Filter;