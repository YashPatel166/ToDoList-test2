import React from 'react';
import './Container.css';

export const Container = ({ children, maxWidth = 'lg', className = '' }) => {
  return (
    <div className={`container container-${maxWidth} ${className}`}>
      {children}
    </div>
  );
};

export default Container;

