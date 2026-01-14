import React from 'react';
import './Stack.css';

export const Stack = ({ children, direction = 'row', gap = 'medium', align = 'start', justify = 'start', className = '' }) => {
  return (
    <div
      className={`stack stack-${direction} stack-gap-${gap} stack-align-${align} stack-justify-${justify} ${className}`}
    >
      {children}
    </div>
  );
};

export default Stack;

