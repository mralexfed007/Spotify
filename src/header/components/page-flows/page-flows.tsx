import React from 'react';

export const PageFlows: React.FunctionComponent = () : JSX.Element => {
  return (
    <div className ='page-flows'>
      <span className='page-flows__flow'>
        <i className='fas fa-chevron-left'></i>
      </span>
      <span className='page-flows__flow'>
        <i className='fas fa-chevron-right disabled'></i>
      </span>
    </div>
  );
}