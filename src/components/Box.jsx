import React from 'react';
import './Box.css';

export const Box = ({ children, padding = 'medium', margin = 'none', className = '' }) => {
  return (
    <div className={`box box-padding-${padding} box-margin-${margin} ${className}`}>
      {children}
    </div>
  );
};

export default Box;

