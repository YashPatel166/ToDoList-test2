import React from 'react';
import './Grid.css';

export const Grid = ({ children, cols = 3, gap = 'medium', className = '' }) => {
  return (
    <div
      className={`grid grid-cols-${cols} grid-gap-${gap} ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
    >
      {children}
    </div>
  );
};

export default Grid;

