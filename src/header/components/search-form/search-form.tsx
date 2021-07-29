import React from 'react';

export const SearchForm: React.FunctionComponent = () : JSX.Element => {
  return (
    <div className ='search-form'>
      <span className='search-form__icon'>
        <i className='fas fa-search'></i>
      </span>
      <input type='text' placeholder='Search' />
    </div>
  );
}